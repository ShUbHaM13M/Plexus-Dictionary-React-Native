import React from 'react';
import {View} from 'react-native';
import globalStyles from '../assets/styles';
import {useTheme} from '../contexts/ThemeContext';

const PageContainer = ({children}) => {
  const {currentTheme} = useTheme();

  return (
    <View
      style={[
        globalStyles.fullHeight,
        globalStyles.defaultMargin,
        {backgroundColor: currentTheme.value?.backgroundColor, flex: 1},
      ]}>
      {children}
    </View>
  );
};

export default PageContainer;
