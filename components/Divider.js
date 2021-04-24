import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = ({opacity, color}) => {
  return (
    <View
      style={[styles.divider, {backgroundColor: color, opacity: opacity || 1}]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'stretch',
    height: 5,
    marginVertical: 10,
  },
});

export default Divider;
