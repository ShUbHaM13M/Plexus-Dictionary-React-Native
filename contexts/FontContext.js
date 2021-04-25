import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {font} from '../assets/styles';

const FontContext = React.createContext();

export function useFont() {
  return useContext(FontContext);
}

async function getCurrentFont() {
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

async function saveCurrentFont(value) {
  try {
    await AsyncStorage.removeItem('currentFont');
    await AsyncStorage.setItem('currentFont', JSON.stringify(value));
  } catch (e) {
    console.log(e.message);
  }
}

const FontProvider = ({children}) => {
  const [currentFont, setCurrentFont] = useState(font.minecraft);

  useEffect(() => {
    getCurrentFont()
      .then(ret => {
        if (ret !== undefined) {
          setCurrentFont(ret);
          return;
        }
        setCurrentFont(font.minecraft);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    saveCurrentFont(currentFont);
  }, [currentFont]);

  const value = {currentFont, setCurrentFont};

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

export default FontProvider;
