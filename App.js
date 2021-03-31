/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ThemeProvider from './contexts/ThemeContext';
import ModalProvider from './contexts/SettingModalContext';

import globalStyles from './assets/styles';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigation/Navigator';
import Settings from './components/Settings';

const App = () => {
  return (
    <SafeAreaView style={[globalStyles.fullHeight, styles.container]}>
      <ThemeProvider>
        <StatusBar />
        <ModalProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
          <Settings />
        </ModalProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
