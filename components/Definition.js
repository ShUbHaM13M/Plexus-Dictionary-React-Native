import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Card from './Card';
import Divider from './Divider';
import globalStyles from '../assets/styles';

const Definition = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={[styles.word, globalStyles.fontMinecraft]}>
          {item.word}
        </Text>
        <Text style={[styles.pronunciation, globalStyles.fontMinecraft]}>
          Pronounced as: {item.pronunciation}
        </Text>
        <Divider />
      </View>
      <Card item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 3,
    marginTop: 20,
    padding: 16,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  word: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  pronunciation: {
    fontSize: 16,
  },
  wrapper: {
    width: '90%',
    alignItems: 'center',
  },
});

export default Definition;
