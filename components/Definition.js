import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import Card from './Card';
import Divider from './Divider';

const Definition = ({item, theme, font}) => {
  const text = {
    color: theme.value?.text,
    fontFamily: font.value?.font,
  };
  const borderColor = {
    borderColor: theme.value?.borderColor,
  };

  const shareWord = async () => {
    try {
      await Share.share(
        {
          title: item?.word,
          message: `${item?.word}: \n${item.definitions[0].definition} 
            \nsent using Plexus Dictionary - https://play.google.com/store/apps/details?id=com.plexus.dictionary`,
        },
        {
          dialogTitle: 'Share the word',
        },
      );
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <View style={[styles.container, borderColor]}>
      <View style={styles.wrapper}>
        <View style={styles.wordContainer}>
          <Text style={[styles.word, text]}>{item.word}</Text>
          <TouchableOpacity onPress={shareWord}>
            <Image
              source={require('../assets/images/shareButton.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        {item.pronunciation && (
          <Text
            selectionColor={theme.value?.accent}
            selectable
            style={[styles.pronunciation, text]}>
            Pronounced as: {item.pronunciation}
          </Text>
        )}
        <Divider color={theme.value?.borderColor} />
      </View>
      <Card item={item} theme={theme} font={font} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    marginTop: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  wordContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  word: {
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    width: 30,
    height: 30,
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
