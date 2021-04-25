import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import DropDown from '../components/DropDown';
import theme from '../assets/colors';
import {useTheme} from '../contexts/ThemeContext';
import Topbar from '../components/Topbar';
import PageContainer from '../components/PageContainer';
import BorderedContainer from '../components/BorderedContainer';
import {font} from '../assets/styles';
import {useFont} from '../contexts/FontContext';
import globalStyles from '../assets/styles';

const themeOptions = [theme.lightTheme, theme.darkTheme, theme.retroTheme];

const fontOptions = [font.minecraft, font.montserrat, font.nunito];

const Settings = ({navigation}) => {
  const {currentTheme, setCurrentTheme} = useTheme();
  const {currentFont, setCurrentFont} = useFont();

  const [closeAll, setCloseAll] = useState(false);

  const onThemeChange = t => {
    setCurrentTheme(t);
  };

  const onFontChange = f => {
    setCurrentFont(f);
  };

  const textColor = {
    color: currentTheme?.value?.text,
    fontFamily: currentFont?.value?.font,
  };

  return (
    <PageContainer
      styles={[globalStyles.fullHeight, globalStyles.defaultMargin]}>
      <Topbar
        hamColor={currentTheme?.value?.accent}
        textColor={textColor}
        navigation={navigation}
        title="Settings"
      />
      <BorderedContainer borderColor={currentTheme?.value?.borderColor}>
        <ScrollView style={styles.settings}>
          <View style={styles.options}>
            <Text style={[styles.optionLabel, textColor]}>Change Theme</Text>
            <DropDown
              defaultSelected={currentTheme}
              options={themeOptions}
              close={{closeAll, setCloseAll}}
              changeValue={onThemeChange}
              theme={currentTheme}
              font={currentFont}
            />
          </View>
          <View style={styles.options}>
            <Text style={[styles.optionLabel, textColor]}>Change Font</Text>
            <DropDown
              defaultSelected={currentFont}
              font={currentFont}
              options={fontOptions}
              close={{closeAll, setCloseAll}}
              theme={currentTheme}
              changeValue={onFontChange}
            />
          </View>
        </ScrollView>
      </BorderedContainer>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  options: {
    width: '100%',
    marginBottom: 20,
  },
  settingsContainer: {
    marginVertical: 20,
    borderWidth: 4,
    flex: 1,
  },
  settings: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  optionLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Settings;
