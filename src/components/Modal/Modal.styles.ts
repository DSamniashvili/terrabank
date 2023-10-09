import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Spacing, Layout, Colors } = useTheme();
  return StyleSheet.create({
    container: {
      padding: Spacing.xl,
      paddingBottom: Spacing.xxl,
    },
    handle: {
      margin: -Spacing.m,
      padding: Spacing.zero,
    },
    handleIndicator: {
      height: 4,
      width: 40,
      backgroundColor: Colors.textWhite400,
    },
    closeButton: {
      ...Layout.alignSelfEnd,
      marginBottom: Spacing.s,
    },
  });
};
