import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../assets/colors';

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

const ThemeProvider = ({children}) => {
  const [currentTheme, setCurrentTheme] = useState({});

  useEffect(() => {
    async function getCurrentTheme() {
      try {
        const value =
          (await AsyncStorage.getItem('currentTheme')) !== null
            ? AsyncStorage.getItem('currentTheme')
            : theme.light;
        return value;
      } catch (e) {
        console.log(e.message);
      }
    }
    setCurrentTheme(getCurrentTheme());
    return () => {};
  }, []);

  const value = {currentTheme, setCurrentTheme};

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
