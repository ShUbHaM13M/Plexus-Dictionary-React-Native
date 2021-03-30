import React from 'react';
import {View, StyleSheet} from 'react-native';

const Ham = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
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
    backgroundColor: 'black',
    marginVertical: 3,
  },
});

export default Ham;
