import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DropDown = ({
  options,
  defaultSelected,
  close,
  changeValue,
  theme,
  font,
}) => {
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
    fontFamily: font.value?.font,
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
    <>
      <View style={(styles.dropdown, {height: 80})}>
        <TouchableOpacity
          style={[styles.selectedOption, borderColor]}
          onPress={toggleOptions}>
          <View style={{flex: 1}}>
            <Text style={[{fontSize: 18, flex: 1}, textColor]}>
              {selectedOption.label}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {showOptions && (
        <View style={[styles.options, borderColor, backgroundColor]}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                index === options.length - 1 ? styles.lastOption : '',
                borderColor,
                option.label === selectedOption.label
                  ? {backgroundColor: theme.value?.accent}
                  : '',
              ]}
              onPress={() => onSelectedOptionChange(option)}>
              <Text
                style={[
                  styles.optionLabel,
                  textColor,
                  {fontFamily: option?.value?.font || font?.value?.font},
                ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 10,
    width: '100%',
    flex: 1,
  },
  selectedOption: {
    borderWidth: 2,
    padding: 10,
    paddingVertical: 20,
    marginBottom: 10,
    zIndex: 1,
    flex: 1,
  },
  options: {
    borderWidth: 2,
    paddingVertical: 10,
    flex: 1,
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
