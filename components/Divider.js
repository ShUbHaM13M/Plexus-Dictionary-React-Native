import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = ({width, opacity}) => {
  return <View style={[styles.divider, {opacity}]} />;
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'stretch',
    height: 5,
    backgroundColor: '#000000aa',
    marginVertical: 8,
  },
});

export default Divider;
