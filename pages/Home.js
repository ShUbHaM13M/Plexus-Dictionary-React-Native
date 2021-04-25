import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Searchbar from '../components/Searchbar';
import fetchWord from '../utils/useFetch';
import Definition from '../components/Definition';
import globalStyles from '../assets/styles';
import Header from '../components/Header';
import {useTheme} from '../contexts/ThemeContext';
import {useFont} from '../contexts/FontContext';
import Error from '../utils/Error';
import {useNetInfo} from '@react-native-community/netinfo';
import {AdMobBanner} from 'react-native-admob';
import ConnectionError from '../components/ConnectionError';
import Loading from '../components/Loading';

const Home = ({navigation}) => {
  const [word, setWord] = useState('');
  const [definition, setDefiniton] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasSearchedWord, setHasSearchedWord] = useState(false);

  const {currentTheme} = useTheme();
  const {currentFont} = useFont();

  const fontStyles = {
    fontFamily: currentFont?.value?.font,
    color: currentTheme?.value?.text,
    fontSize: 20,
    textAlign: 'center',
  };

  const netInfo = useNetInfo();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);

  const searchWord = async () => {
    resetStates();
    setLoading(true);
    setHasSearchedWord(true);
    const data = await fetchWord(word);
    if (data.word) {
      setWord('');
      setDefiniton(data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  function resetStates() {
    setLoading(false);
    setError(false);
    setDefiniton({});
  }

  return (
    <>
      <View
        styles={[
          globalStyles.fullHeight,
          globalStyles.defaultMargin,
          globalStyles.justifyCenter,
          {backgroundColor: currentTheme?.value?.backgroundColor},
        ]}>
        <Header
          navigation={navigation}
          theme={currentTheme}
          font={currentFont}
        />

        {netInfo.isConnected === true ? (
          <View style={globalStyles.fullHeight}>
            <Searchbar
              word={word}
              setWord={setWord}
              searchWord={searchWord}
              theme={currentTheme}
              font={currentFont}
              resetStates={resetStates}
            />

            {!hasSearchedWord && (
              <View
                style={[
                  globalStyles.fullHeight,
                  globalStyles.justifyCenter,
                  globalStyles.alignCenter,
                ]}>
                <Text style={fontStyles}>Search for a word ✨</Text>
              </View>
            )}

            {error && !loading && <Error word={word} font={currentFont} />}

            {loading && (
              <View
                style={[globalStyles.fullHeight, globalStyles.justifyCenter]}>
                <Loading color={currentTheme?.value?.accent} />
              </View>
            )}

            <View style={globalStyles.fullHeight}>
              {!loading && definition.word && (
                <Definition
                  item={definition}
                  theme={currentTheme}
                  font={currentFont}
                />
              )}
            </View>
          </View>
        ) : (
          <ConnectionError fontStyles={fontStyles} />
        )}
      </View>
      {netInfo.isConnected === true && (
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-5513554145201699/2092471751"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={er => console.error(er)}
        />
      )}
    </>
  );
};

export default Home;
