/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import ThemeProvider from './contexts/ThemeContext';

import globalStyles from './assets/styles';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigation/Navigator';

const App = () => {
  return (
    <SafeAreaView style={[globalStyles.fullHeight, styles.container]}>
      <ThemeProvider>
        <StatusBar />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
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
