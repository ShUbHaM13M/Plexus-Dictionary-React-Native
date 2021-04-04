import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Card from './Card';
import Divider from './Divider';

const Definition = ({item, theme}) => {
  const textColor = {
    color: theme.value?.text,
  };
  const borderColor = {
    borderColor: theme.value?.borderColor,
  };

  return (
    <View style={[styles.container, borderColor]}>
      <View style={styles.wrapper}>
        <Text style={[styles.word, textColor]}>{item.word}</Text>
        <Text
          selectionColor={theme.value?.accent}
          selectable
          style={[styles.pronunciation, textColor]}>
          Pronounced as: {item.pronunciation}
        </Text>
        <Divider color={theme.value?.borderColor} />
      </View>
      <Card item={item} theme={theme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    marginTop: 20,
    padding: 16,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  word: {
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 15,
  },
  pronunciation: {
    fontSize: 18,
    marginBottom: 10,
  },
  wrapper: {
    width: '90%',
    alignItems: 'center',
  },
});

export default Definition;
