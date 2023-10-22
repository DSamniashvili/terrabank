import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Colors, FontSize, Spacing, Layout } = useTheme();
  return StyleSheet.create({
    container: {
      paddingVertical: Spacing.m,
      ...Layout.center,
    },
    icon: {
      marginVertical: Spacing.m,
    },
    text: {
      fontSize: FontSize.regular,
      textAlign: 'center',
      color: Colors.pinColor,
    },
    label: {
      fontSize: FontSize.small,
      textAlign: 'center',
      color: Colors.textBlack500,
      paddingVertical: Spacing.lg,
    },
  });
};
