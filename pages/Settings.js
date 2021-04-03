import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import DropDown from '../components/DropDown';
import theme from '../assets/colors';
import {useTheme} from '../contexts/ThemeContext';
import Topbar from '../components/Topbar';
import PageContainer from '../components/PageContainer';
import BorderedContainer from '../components/BorderedContainer';

const themeOptions = [theme.lightTheme, theme.darkTheme, theme.retroTheme];

const fontOptions = [
  {
    label: 'Minecraft',
    value: 'Minecraft-Regular',
  },
  {
    label: 'Montserrat',
    value: 'Montserrat-Regular',
  },
  {
    label: 'Nunito',
    value: 'Nunito-Regular',
  },
];

const Settings = ({navigation}) => {
  const {currentTheme, setCurrentTheme} = useTheme();

  const [closeAll, setCloseAll] = useState(false);

  const onThemeChange = t => {
    setCurrentTheme(t);
  };

  const textColor = {
    color: currentTheme.value?.text,
  };

  return (
    <PageContainer>
      <Topbar
        hamColor={currentTheme.value?.accent}
        textColor={textColor}
        navigation={navigation}
        title="Settings"
      />
      <BorderedContainer
        borderColor={currentTheme.value?.borderColor}
        onPress={() => setCloseAll(true)}>
        <SafeAreaView style={styles.settings}>
          <View style={styles.options}>
            <Text style={[styles.optionLabel, textColor]}>Change Theme</Text>
            <DropDown
              defaultSelected={currentTheme}
              options={themeOptions}
              close={{closeAll, setCloseAll}}
              changeValue={onThemeChange}
              theme={currentTheme}
            />
          </View>
          <View style={styles.options}>
            <Text style={[styles.optionLabel, textColor]}>Change Font</Text>
            <DropDown
              options={fontOptions}
              close={{closeAll, setCloseAll}}
              theme={currentTheme}
            />
          </View>
        </SafeAreaView>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  optionLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Settings;
