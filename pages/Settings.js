import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import globalStyles from '../assets/styles';
import DropDown from '../components/DropDown';
import Ham from '../components/Ham';
import theme from '../assets/colors';
import {useTheme} from '../contexts/ThemeContext';
// import {useEffect} from 'react';

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
    <View
      style={[
        globalStyles.fullHeight,
        globalStyles.defaultMargin,
        styles.container,
        {backgroundColor: currentTheme.value?.backgroundColor},
      ]}>
      <View style={styles.topBar}>
        <Text style={[styles.label, textColor]}>Settings</Text>
        <Pressable onPress={navigation.openDrawer}>
          <Ham color={currentTheme.value?.accent} />
        </Pressable>
      </View>
      <Pressable
        onPress={() => {
          setCloseAll(true);
        }}
        style={[
          styles.settingsContainer,
          {borderColor: currentTheme.value?.borderColor},
        ]}>
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
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  label: {
    fontSize: 24,
  },
});

export default Settings;
