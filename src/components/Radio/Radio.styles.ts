import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Colors, Spacing } = useTheme();
  return StyleSheet.create({
    outline: {
      width: Spacing.lg,
      height: Spacing.lg,
      borderWidth: Spacing.xxs,
      borderRadius: Spacing.m,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: Colors.textBlack400,
    },
    inner: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: Colors.primary,
    },
    selected: {
      borderColor: Colors.primary,
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      marginLeft: Spacing.s,
    },
  });
};
