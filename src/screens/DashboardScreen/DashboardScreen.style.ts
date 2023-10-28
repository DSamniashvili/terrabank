import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Spacing, Layout } = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      ...Layout.fullSize,
      ...Layout.justifyContentStart,
      paddingHorizontal: Spacing.xl,
      paddingTop: Spacing.xxl - Spacing.xxs,
      borderTopLeftRadius: Spacing.xl,
      borderTopRightRadius: Spacing.xl,
      flex: 1,
    },
  });
};
