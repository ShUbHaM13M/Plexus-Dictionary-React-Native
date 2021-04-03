import React from 'react';
import {View, Text} from 'react-native';
import BorderedContainer from '../components/BorderedContainer';
import PageContainer from '../components/PageContainer';
import Topbar from '../components/Topbar';
import {useTheme} from '../contexts/ThemeContext';

const About = ({navigation}) => {
  const {currentTheme} = useTheme();

  const textColor = {
    color: currentTheme.value?.text,
  };

  return (
    <PageContainer>
      <Topbar
        title="About"
        navigation={navigation}
        hamColor={currentTheme.value?.accent}
        textColor={textColor}
      />
      <BorderedContainer borderColor={currentTheme.value?.borderColor}>
        <View>
          <Text>Plexus Dictionary</Text>
          <Text>Made with ❤ using React Native</Text>
        </View>
      </BorderedContainer>
    </PageContainer>
  );
};

export default About;
