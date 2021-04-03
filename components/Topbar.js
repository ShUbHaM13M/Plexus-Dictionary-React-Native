import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Ham from '../components/Ham';

const Topbar = ({navigation, hamColor, textColor, title}) => {
  return (
    <View style={styles.topBar}>
      <Text style={[styles.label, textColor]}>{title}</Text>
      <Pressable onPress={navigation.openDrawer}>
        <Ham color={hamColor} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
  },
});

export default Topbar;
