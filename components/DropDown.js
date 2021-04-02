import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const DropDown = ({options, defaultSelected, close, changeValue, theme}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultSelected || options[0],
  );

  const borderColor = {
    borderColor: theme.value?.borderColor,
  };

  const backgroundColor = {
    backgroundColor: theme.value?.backgroundColor,
  };

  const textColor = {
    color: theme.value?.text,
  };

  useEffect(() => {
    if (close.closeAll === true) {
      setShowOptions(false);
      close.setCloseAll(false);
    }
  }, [close, close.closeAll]);

  const toggleOptions = () => {
    setShowOptions(prev => !prev);
  };

  const onSelectedOptionChange = option => {
    setSelectedOption(option);
    changeValue(option);
    toggleOptions();
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity
        style={[styles.selectedOption, borderColor]}
        onPress={toggleOptions}>
        <View>
          <Text style={[{fontSize: 18}, textColor]}>
            {selectedOption.label}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Rendering options here.. */}

      {showOptions && (
        <FlatList
          style={[styles.options, borderColor, backgroundColor]}
          data={options}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                styles.option,
                index === options.length - 1 ? styles.lastOption : '',
                borderColor,
                item.label === selectedOption.label
                  ? {backgroundColor: theme.value?.accent}
                  : '',
              ]}
              onPress={() => onSelectedOptionChange(item)}>
              <Text style={[styles.optionLabel, textColor]}>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 10,
    width: '100%',
  },
  selectedOption: {
    borderWidth: 2,
    padding: 10,
    paddingVertical: 20,
    marginBottom: 10,
    zIndex: 1,
  },
  options: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    maxHeight: 250,
    borderWidth: 2,
    paddingVertical: 10,
    elevation: 2,
    zIndex: 20,
  },
  option: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#00000044',
  },
  optionLabel: {
    width: '100%',
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  lastOption: {
    borderBottomWidth: 0,
  },
});

export default DropDown;
