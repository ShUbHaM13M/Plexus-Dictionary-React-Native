import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useModal} from '../contexts/SettingModalContext';
import DropDown from './DropDown';
import theme from '../assets/colors';

const Settings = () => {
  const {showModal, setShowModal} = useModal();
  const themeOptions = [
    {
      label: 'Light',
      value: theme.light,
    },
    {
      label: 'Dark',
      value: theme.dark,
    },
    {
      label: 'Retro',
      value: theme.retro,
    },
  ];

  return (
    <>
      {showModal === true ? (
        <Pressable
          onPress={() => setShowModal(false)}
          style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text>Change Theme: </Text>
            <DropDown options={themeOptions} />
          </View>
        </Pressable>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    backgroundColor: '#000000bb',
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
});

export default Settings;
