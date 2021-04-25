import React, {useState, useEffect, useContext, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../assets/colors';

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

async function getCurrentTheme() {
  try {
    const value = await AsyncStorage.getItem('currentTheme');
    let ret;
    if (value != null) {
      ret = JSON.parse(value);
    }
    return ret;
  } catch (e) {
    console.log(e.message);
  }
}

async function saveCurrentTheme(value) {
  try {
    await AsyncStorage.removeItem('currentTheme');
    await AsyncStorage.setItem('currentTheme', JSON.stringify(value));
  } catch (e) {
    console.log(e.message);
  }
}

const ThemeProvider = ({children}) => {
  const [currentTheme, setCurrentTheme] = useState(theme.lightTheme);
  const previousTheme = useRef(currentTheme);

  useEffect(() => {
    previousTheme.current = currentTheme;
  });

  useEffect(() => {
    getCurrentTheme()
      .then(ret => {
        if (ret !== undefined) {
          setCurrentTheme(ret);
          return;
        }
        setCurrentTheme(theme.lightTheme);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    saveCurrentTheme(currentTheme);
  }, [currentTheme]);

  const value = {currentTheme, setCurrentTheme, previousTheme};

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
