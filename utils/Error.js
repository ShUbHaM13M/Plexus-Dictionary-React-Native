import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import globalStyles from '../assets/styles';

const generateRandom = word => {
  const messages = [
    `Word: '${word}' not found...`,
    `Err.. ${word} not found, maybe a typo ?`,
    `404... couldn't find the word: ${word}`,
  ];

  return messages[Math.floor(Math.random() * messages.length)];
};

const styles = StyleSheet.create({
  error: {
    color: '#fc655a',
    fontSize: 20,
  },
});

const Error = ({word, font}) => {
  let message = generateRandom(word);

  return (
    <View
      style={[
        globalStyles.fullHeight,
        globalStyles.justifyCenter,
        globalStyles.alignCenter,
      ]}>
      <Text style={[styles.error, {fontFamily: font.value.font}]}>
        {message}
      </Text>
    </View>
  );
};

export default Error;
