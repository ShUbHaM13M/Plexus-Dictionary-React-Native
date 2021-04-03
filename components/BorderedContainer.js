import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

const BorderedContainer = ({borderColor, children, onPress}) => {
  return (
    <Pressable
      style={[styles.container, {borderColor}]}
      onPress={onPress !== null ? onPress : ''}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderWidth: 4,
    flex: 1,
  },
});

export default BorderedContainer;
