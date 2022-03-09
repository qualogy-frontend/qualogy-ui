const dates = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const dateToText = (date: string) => {
  const dateObj = new Date(date);

  return `${dateObj.getDay()}, ${
    dates[dateObj.getMonth()]
  } ${dateObj.getFullYear()}`;
};

const primaryColor = '#C52C23';
const secondaryColor = '#231F20';
const ternaryColor = '#e56C2A';
const brown = '#231F20';
const darkBrown = '#181012';
const bordoRed = '#C52C23';
const bordoBrown = '#B53432';
const lightBrown = '#641C1B';
const white = '#fff';
// const black = '#000';
const lightGrey = '#848278';
const lightGrey2 = '#C4C4C4';
const orange = '#E56C2A';

export const ThemeColors = {
  primary: primaryColor,
  secondary: secondaryColor,
  ternary: ternaryColor,
  //
  primaryFont: white,
  secondaryFont: brown,
  inactiveFont: lightGrey,
  linkFont: bordoRed,
  subFont: orange,
  //
  navigationBackground: darkBrown,
  inactive: lightGrey2,
  postTag: '#ffffff4f',
  //
  circleBrown: bordoBrown,
  circleLightBrown: lightBrown,
};
