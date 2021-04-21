import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {useTheme} from '../contexts/ThemeContext';

const PageContainer = ({children, styles}) => {
  const {currentTheme, previousTheme} = useTheme();
  const animationVar = useRef(new Animated.Value(0)).current;

  const animateBgColor = useRef(() => {
    Animated.timing(animationVar, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(animationVar.setValue(0));
  });

  useEffect(() => {
    animateBgColor.current();
  }, [currentTheme?.value?.backgroundColor]);

  return (
    <Animated.View
      style={[
        [...styles],
        {
          backgroundColor: animationVar.interpolate({
            inputRange: [0, 1],
            outputRange: [
              previousTheme.current?.value?.backgroundColor,
              currentTheme?.value?.backgroundColor,
            ],
          }),
        },
      ]}>
      {children}
    </Animated.View>
  );
};

export default PageContainer;
