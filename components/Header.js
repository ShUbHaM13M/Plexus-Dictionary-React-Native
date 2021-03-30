import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import globalStyles from '../assets/styles';
import Ham from './Ham';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require('../assets/images/owlReadingBook.png')}
        />
        <View style={globalStyles.justifyCenter}>
          <Text>Plexus</Text>
          <Text>Dictionary</Text>
        </View>
      </View>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Ham />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default Header;
