import {StyleSheet} from 'react-native';

export const font = {
  minecraft: {
    label: 'Minecraft',
    value: {
      font: 'Minecraft-Regular',
    },
  },
  montserrat: {
    label: 'Montserrat',
    value: {
      font: 'Montserrat-Regular',
      fontBold: 'Montserrat-Bold',
    },
  },
  nunito: {
    label: 'Nunito',
    value: {
      font: 'Nunito-Regular',
      fontBold: 'Nunito-Bold',
    },
  },
};

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  defaultMargin: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  errorColor: {
    color: '#fc655a',
  },
});

export default styles;
