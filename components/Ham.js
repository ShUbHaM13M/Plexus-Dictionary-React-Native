import React from 'react';
import {View, StyleSheet} from 'react-native';

const Ham = ({color}) => {
  const backgroundColor = {
    backgroundColor: color,
  };
  return (
    <View style={styles.container}>
      <View style={[styles.line, backgroundColor]} />
      <View style={[styles.line, backgroundColor]} />
      <View style={[styles.line, backgroundColor]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 40,
  },
  line: {
    height: 5,
    width: '100%',
    marginVertical: 3,
  },
});

export default Ham;
