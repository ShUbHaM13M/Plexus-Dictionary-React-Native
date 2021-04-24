import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import globalStyles from '../assets/styles';
import Divider from './Divider';

const Card = ({item, theme, font}) => {
  const text = {
    color: theme.value?.text,
    fontFamily: font.value?.font,
  };

  const borderColor = {
    borderColor: theme.value?.borderColor,
  };

  return (
    <ScrollView
      style={styles.scrollview}
      keyboardDismissMode="on-drag"
      overScrollMode="never">
      {item.definitions &&
        item.definitions.map((word, index) => (
          <View style={styles.card} key={index}>
            {word.image_url && (
              <Image
                source={{uri: word.image_url}}
                style={[styles.image, borderColor]}
              />
            )}
            {word.type && (
              <Text style={[styles.type, globalStyles.fontMinecraft, text]}>
                {word.type}
              </Text>
            )}
            <DefDivider color={theme.value?.accent} />
            <Text
              selectionColor={theme.value?.accent}
              selectable
              style={[styles.definition, globalStyles.fontMinecraft, text]}>
              {word.definition} {word.emoji}
            </Text>
            {word.example && (
              <>
                <DefDivider color={theme.value?.accent} />
                <Text
                  selectable
                  selectionColor={theme.value?.accent}
                  style={[styles.example, globalStyles.fontMinecraft, text]}>
                  "{word.example}"
                </Text>
              </>
            )}
            <View style={{marginVertical: 10, width: '70%'}}>
              <Divider opacity={0.6} color={theme.value?.borderColor} />
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const DefDivider = ({color}) => {
  const backgroundColor = {
    backgroundColor: color,
  };

  return (
    <View style={styles.divider}>
      <View style={[styles.line, styles.first, backgroundColor]} />
      <View style={[styles.line, styles.second, backgroundColor]} />
      <View style={[styles.line, styles.third, backgroundColor]} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderWidth: 2,
  },
  scrollview: {
    marginTop: 10,
    padding: 10,
  },
  type: {
    width: '100%',
    fontSize: 18,
    marginBottom: 4,
  },
  card: {
    marginBottom: 16,
    alignItems: 'center',
  },
  definition: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  example: {
    fontSize: 18,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  divider: {
    height: 10,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  line: {
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
