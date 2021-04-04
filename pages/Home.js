import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
} from 'react-native';
import Searchbar from '../components/Searchbar';
import fetchWord from '../utils/useFetch';
import Definition from '../components/Definition';
import globalStyles from '../assets/styles';
import Header from '../components/Header';
import {useTheme} from '../contexts/ThemeContext';

const Home = ({navigation}) => {
  const animationVar = useRef(new Animated.Value(0)).current;
  const [word, setWord] = useState('');
  const [definition, setDefiniton] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {currentTheme, previousTheme} = useTheme();

  const animateBgColor = useRef(() => {
    Animated.timing(animationVar, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(animationVar.setValue(0));
  });

  useEffect(() => {
    animateBgColor.current();
  }, [currentTheme.value?.backgroundColor]);

  const searchWord = async () => {
    resetStates();
    setLoading(true);
    const data = await fetchWord(word);
    if (data.word) {
      setWord('');
      setDefiniton(data);
      setLoading(false);
    } else {
      setError('Word not Found..');
      setLoading(false);
    }
  };

  function resetStates() {
    setLoading(false);
    setError(null);
    setDefiniton({});
  }

  return (
    <Animated.View
      style={[
        globalStyles.fullHeight,
        globalStyles.defaultMargin,
        styles.container,
        {
          backgroundColor: animationVar.interpolate({
            inputRange: [0, 1],
            outputRange: [
              previousTheme.current.value?.backgroundColor,
              currentTheme.value?.backgroundColor,
            ],
          }),
        },
      ]}>
      <Header navigation={navigation} theme={currentTheme} />
      <View style={globalStyles.fullHeight}>
        <Searchbar
          word={word}
          setWord={setWord}
          searchWord={searchWord}
          theme={currentTheme}
        />

        {error && !loading && (
          <View>
            <Text>{error}</Text>
          </View>
        )}

        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator
              size="large"
              color={currentTheme.value?.accent}
            />
          </View>
        )}

        <View style={styles.definitionContainer}>
          {!loading && definition.word && (
            <Definition item={definition} theme={currentTheme} />
          )}
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  definitionContainer: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
  },
});

export default Home;
