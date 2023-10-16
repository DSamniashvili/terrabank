import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Spacing, Layout, BorderRadius, Colors } = useTheme();
  return StyleSheet.create({
    iconCommonStyles: {
      width: 32,
      height: 32,
      ...Layout.center,
    },
    iconRoundedStyles: {
      borderRadius: BorderRadius.full,
      borderColor: Colors.gray200,
      borderWidth: 1,
      padding: Spacing.xs,
      margin: Spacing.xs,
    },
  });
};
