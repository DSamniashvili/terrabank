import { ThemeVariables } from 'types/declarations/theme';

export default function ({}: ThemeVariables) {
  return {
    logo: require('assets/images/tom_light.png'),
    sparkles: {
      topLeft: require('assets/images/sparkles-top-left.png'),
      top: require('assets/images/sparkles-top.png'),
      topRight: require('assets/images/sparkles-top-right.png'),
      right: require('assets/images/sparkles-right.png'),
      bottomRight: require('assets/images/sparkles-bottom-right.png'),
      bottom: require('assets/images/sparkles-bottom.png'),
      bottomLeft: require('assets/images/sparkles-bottom-left.png'),
    },
    icons: {
      colors: require('assets/images/colorswatch.png'),
      check: require('assets/images/checksuccess.png'),
      send: require('assets/images/send.png'),
      translate: require('assets/images/translate.png'),
    },
  };
}
