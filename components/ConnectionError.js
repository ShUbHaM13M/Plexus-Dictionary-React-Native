import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../assets/styles';

const ConnectionError = ({fontStyles}) => {
  return (
    <View style={[globalStyles.fullHeight, globalStyles.justifyCenter]}>
      <Text style={fontStyles}>
        <Text style={globalStyles.errorColor}>Connection Error: </Text>
        You need to be connected to the internet
      </Text>
    </View>
  );
};

export default ConnectionError;
