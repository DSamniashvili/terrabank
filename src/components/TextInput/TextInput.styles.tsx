import { StyleSheet } from 'react-native';
import { Colors, FontSize, Spacing } from 'theme/Variables';

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderBottomColor: Colors.INPUT_BOTTOM_GRAY,
  },
  label: {
    position: 'absolute',
    color: Colors.textBlack500,
  },
  wrapper: {
    marginTop: FontSize.tiny,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '85%',
    paddingLeft: Spacing.zero,
    fontSize: FontSize.regular,
  },
  iconContainer: {
    marginBottom: Spacing.ml - Spacing.xxs,
  },
});

export default styles;
