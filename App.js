/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import ThemeProvider from './contexts/ThemeContext';
import FontProvider from './contexts/FontContext';
import SplashScreen from 'react-native-splash-screen';
import globalStyles from './assets/styles';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigation/Navigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={[globalStyles.fullHeight, styles.container]}>
      <FontProvider>
        <ThemeProvider>
          <StatusBar />
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </ThemeProvider>
      </FontProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
