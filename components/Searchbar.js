import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const Searchbar = ({word, setWord, searchWord, theme, font, resetStates}) => {
  const [isFocused, setIsFocused] = useState(false);
  const focusedStyle = {
    borderStyle: 'solid',
    borderColor: theme?.value?.accent,
  };
  const blurredStyle = {
    borderStyle: 'dashed',
    borderColor: theme?.value?.text,
  };

  const textInputStyle = {
    color: theme?.value?.text,
    fontFamily: font?.value?.font,
    fontSize: 18,
  };

  return (
    <View
      style={[
        styles.searchContainer,
        isFocused === true ? focusedStyle : blurredStyle,
      ]}>
      <TextInput
        style={[styles.searchBar, textInputStyle]}
        placeholder="Search"
        placeholderTextColor={
          theme.value ? `${theme.value?.text}44` : '#ffffff00'
        }
        onChangeText={text => setWord(text)}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            searchWord();
          }
        }}
        value={word}
        onFocus={() => {
          setIsFocused(true);
          resetStates();
        }}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity onPress={searchWord}>
        <Image
          source={require('../assets/images/SearchIcon.png')}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
    paddingHorizontal: 12,
    borderWidth: 3,
    borderRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  focused: {
    borderStyle: 'solid',
    borderColor: '#0084A5',
  },
  blurred: {
    borderStyle: 'dashed',
    borderColor: 'black',
  },
  searchBar: {
    paddingVertical: 15,
    fontSize: 16,
    flex: 1,
  },
  searchIcon: {
    width: 28,
    height: 28,
  },
});

export default Searchbar;
