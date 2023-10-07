import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Colors, FontSize, Spacing } = useTheme();
  return StyleSheet.create({
    inputContainer: {
      height: 50,
      borderBottomWidth: 1,
      justifyContent: 'center',
      borderBottomColor: Colors.inputBlack50,
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
};
