import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import globalStyles from '../assets/styles';
import Divider from './Divider';

const Card = ({item}) => {
  return (
    <ScrollView style={styles.scrollview}>
      {item.definitions &&
        item.definitions.map((word, index) => (
          <View style={styles.card} key={index}>
            {word.image_url && (
              <Image source={{uri: word.image_url}} style={styles.image} />
            )}
            <Text style={[styles.type, globalStyles.fontMinecraft]}>
              {word.type}
            </Text>
            <DefDivider />
            <Text style={[styles.definition, globalStyles.fontMinecraft]}>
              {word.definition}
            </Text>
            {word.example && (
              <>
                <DefDivider />
                <Text style={[styles.example, globalStyles.fontMinecraft]}>
                  "{word.example}"
                </Text>
              </>
            )}
            <Divider opacity={0.4} />
          </View>
        ))}
    </ScrollView>
  );
};

const DefDivider = () => {
  return (
    <View style={styles.divider}>
      <View style={[styles.line, styles.first]} />
      <View style={[styles.line, styles.second]} />
      <View style={[styles.line, styles.third]} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginVertical: 16,
    borderWidth: 2,
    borderColor: '#0084A5',
  },
  scrollview: {
    marginTop: 10,
  },
  type: {
    width: '100%',
    fontSize: 16,
    marginBottom: 4,
  },
  card: {
    marginBottom: 16,
    alignItems: 'center',
  },
  definition: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '500',
    marginVertical: 6,
  },
  example: {
    fontSize: 16,
    marginTop: 8,
  },
  divider: {
    height: 10,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  line: {
    backgroundColor: '#0084A5',
    marginRight: 5,
  },
  first: {
    width: 20,
  },
  second: {
    width: 15,
  },
  third: {
    width: 10,
  },
});

export default Card;
