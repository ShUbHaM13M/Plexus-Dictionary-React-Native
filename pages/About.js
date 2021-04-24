import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import BorderedContainer from '../components/BorderedContainer';
import PageContainer from '../components/PageContainer';
import Topbar from '../components/Topbar';
import {useTheme} from '../contexts/ThemeContext';
import {useFont} from '../contexts/FontContext';
import {version as app_version} from '../package.json';
import globalStyles from '../assets/styles';

const About = ({navigation}) => {
  const {currentTheme} = useTheme();
  const {currentFont} = useFont();
  const text = {
    color: currentTheme?.value?.text,
    fontFamily: currentFont?.value?.font,
  };
  const footer = {
    width: '95%',
    borderWidth: 2,
    paddingVertical: 10,
    borderColor: 'transparent',
    borderTopColor: currentTheme?.value?.borderColor,
  };

  const shareButton = {
    backgroundColor: currentTheme?.value?.accent,
    padding: 10,
    paddingVertical: 15,
    marginTop: 20,
    borderWidth: 2,
    borderColor: currentTheme?.value?.borderColor,
  };

  const onShare = async () => {
    try {
      await Share.share(
        {
          title: 'Sharing Plexus Dictionary',
          message:
            'Checkout this app on playstore: https://play.google.com/store/apps/details?id=com.plexus.dictionary',
        },
        {
          dialogTitle: 'Share this app..',
        },
      );
    } catch (e) {}
  };

  return (
    <PageContainer
      styles={[globalStyles.fullHeight, globalStyles.defaultMargin]}>
      <Topbar
        title="About"
        navigation={navigation}
        hamColor={currentTheme.value?.accent}
        textColor={text}
      />
      <BorderedContainer borderColor={currentTheme.value?.borderColor}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/images/owlReadingBook.png')}
          />
          <Text
            style={[
              text,
              styles.main,
              styles.textCenter,
              {color: currentTheme.value?.borderColor},
            ]}>
            Plexus Dictionary
          </Text>
          <View style={globalStyles.fullHeight}>
            <Text style={[text, styles.textCenter, styles.copyrightText]}>
              Copyright © 2021, v-{app_version}
            </Text>
            <TouchableOpacity style={shareButton} onPress={onShare}>
              <Text style={[text, {textAlign: 'center', fontSize: 18}]}>
                Share
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[text, styles.size, styles.textCenter, footer]}>
            Made with <Text style={styles.heartColor}>❣</Text> in India
          </Text>
        </View>
      </BorderedContainer>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  main: {
    fontSize: 22,
    marginBottom: 10,
  },
  size: {
    fontSize: 18,
  },
  copyrightText: {
    fontSize: 12,
    opacity: 0.8,
    marginVertical: 10,
  },
  heartColor: {
    color: '#D6524A',
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
});

export default About;
