const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#ee4c2c',
  },
};

//EE4C2C
const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#000',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#ee4c2c',
  },
};

export { lightTheme, darkTheme };
