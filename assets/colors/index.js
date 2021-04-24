const blue = '#0084a5';
const gray0 = '#f8f8f8';
// const gray5 = '#24282f';
const gray6 = '#12181b';
const purple = '#d8a4eb';
const turquiose = '#4f8a8b';
const yellow = '#fbd46d';
const retroDark = '#222831';
const retroWhite = '#eeeeee';

const light = {
  backgroundColor: gray0,
  text: gray6,
  borderColor: '#000',
  accent: blue,
};

const dark = {
  backgroundColor: gray6,
  text: gray0,
  borderColor: '#fff',
  accent: purple,
};

const retro = {
  backgroundColor: retroDark,
  text: retroWhite,
  borderColor: yellow,
  accent: turquiose,
};

const theme = {
  lightTheme: {
    label: 'Light',
    value: {...light},
  },
  darkTheme: {
    label: 'Dark',
    value: {...dark},
  },
  retroTheme: {
    label: 'Retro',
    value: {...retro},
  },
};

export default theme;
