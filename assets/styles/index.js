import {StyleSheet} from 'react-native';

export const font = {
  minecraft: {
    fontFamily: 'Minecraft-Regular',
  },
  montserrat: {
    fontFamily: 'Montserrat-Regular',
    fontBold: 'Montserrat-Bold',
  },
  nunito: {
    fontFamily: 'Nunito-Regular',
    fontBold: 'Nunito-Bold',
  },
};

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  defaultMargin: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
});

export default styles;
