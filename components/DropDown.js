import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Pressable} from 'react-native';

const DropDown = ({options, defaultSelected}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultSelected || options[0],
  );

  const toggleOptions = () => {
    setShowOptions(prev => !prev);
  };

  const onSelectedOptionChange = option => {
    setSelectedOption(option);
    toggleOptions();
  };

  return (
    <View style={styles.dropdown}>
      <Pressable style={styles.selectedOption} onPress={toggleOptions}>
        <View>
          <Text style={{fontSize: 18}}>{selectedOption.label}</Text>
        </View>
      </Pressable>

      {/* Rendering options here.. */}

      {showOptions && (
        <FlatList
          style={styles.options}
          data={options}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                styles.option,
                index == options.length - 1 ? styles.lastOption : '',
              ]}
              onPress={() => onSelectedOptionChange(item)}>
              <Text style={styles.optionLabel}>{item.label}</Text>
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
    width: 150,
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
  },
  options: {
    position: 'absolute',
    top: '90%',
    width: '100%',
    maxHeight: 150,
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
  },
  option: {
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#00000044',
  },
  optionLabel: {
    color: '#000',
    fontSize: 18,
  },
  lastOption: {
    borderBottomWidth: 0,
    marginBottom: 20,
  },
});

export default DropDown;
