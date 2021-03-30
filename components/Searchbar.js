import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const Searchbar = ({word, setWord, searchWord}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.searchContainer,
        isFocused === true ? styles.focused : styles.blurred,
      ]}>
      <TextInput
        style={[styles.searchBar]}
        placeholder="Search"
        onChangeText={text => setWord(text)}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            searchWord();
          }
        }}
        value={word}
        onFocus={() => setIsFocused(true)}
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
    paddingHorizontal: 10,
    borderWidth: 2,
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
    paddingVertical: 8,
    fontSize: 16,
    flex: 1,
  },
  searchIcon: {
    width: 28,
    height: 28,
  },
});

export default Searchbar;
