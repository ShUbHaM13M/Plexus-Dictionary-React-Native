import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {font} from '../assets/styles';

const FontContext = React.createContext();

export function useFont() {
  return useContext(FontContext);
}

async function getCurrentTheme() {
  try {
    const value = await AsyncStorage.getItem('currentFont');
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
    await AsyncStorage.setItem('currentFont', JSON.stringify(value));
  } catch (e) {
    console.log(e.message);
  }
}

const FontProvider = ({children}) => {
  const [currentFont, setCurrentFont] = useState(font.minecraft);

  useEffect(() => {
    getCurrentTheme()
      .then(ret => {
        if (ret !== null) {
          setCurrentFont(ret);
          return;
        }
        setCurrentFont(font.minecraft);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    saveCurrentTheme(currentFont);
  }, [currentFont]);

  const value = {currentFont, setCurrentFont};

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

export default FontProvider;
