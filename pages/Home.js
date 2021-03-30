import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Searchbar from '../components/Searchbar';
import fetchWord from '../utils/useFetch';
import Definition from '../components/Definition';
import globalStyles from '../assets/styles';
import Header from '../components/Header';
import {useTheme} from '../contexts/ThemeContext';

const Home = ({navigation}) => {
  const [word, setWord] = useState('');
  const [definition, setDefiniton] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {currentTheme} = useTheme();
  console.log(currentTheme);

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
    <View
      style={[
        globalStyles.fullHeight,
        globalStyles.defaultMargin,
        styles.container,
      ]}>
      <Header navigation={navigation} />
      <View style={globalStyles.fullHeight}>
        <Searchbar word={word} setWord={setWord} searchWord={searchWord} />

        {error && !loading && (
          <View>
            <Text>{error}</Text>
          </View>
        )}

        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        )}

        <View style={styles.definitionContainer}>
          {!loading && definition.word && <Definition item={definition} />}
        </View>
      </View>
    </View>
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
