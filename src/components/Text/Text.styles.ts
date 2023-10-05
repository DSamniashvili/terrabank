import { StyleSheet } from 'react-native';
import { Colors, FontSize } from 'theme/Variables';

const styles = StyleSheet.create({
  default: {
    fontSize: FontSize.regular,
    lineHeight: FontSize.large,
    color: Colors.textBlack,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  center: {
    textAlign: 'center',
  },
  label: {
    fontSize: FontSize.tiny,
    lineHeight: FontSize.regular,
  },
  title: {
    fontSize: FontSize.small,
    lineHeight: 22,
  },
  headline: {
    fontSize: FontSize.large,
    lineHeight: 34,
  },
  secondary: {
    color: Colors.textBlack500,
  },
  special: {
    color: Colors.textPrimary,
  },
});

export default styles;