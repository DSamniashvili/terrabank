import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Spacing, Layout, Colors } = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: Colors.gray,
      ...Layout.justifyContentStart,
      borderTopLeftRadius: Spacing.xl,
      borderTopRightRadius: Spacing.xl,
    },
    containerFlex: { flex: 1 },
    cardContainer: {
      paddingVertical: Spacing.m,
      width: '100%',
      paddingHorizontal: Spacing.xl,
      paddingTop: Spacing.xxl - Spacing.xxs,
      backgroundColor: Colors.white,
      marginBottom: Spacing.xxs,
    },
  });
};
