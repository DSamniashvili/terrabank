import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

// shared styles for all button types
export const useStyleTheme = () => {
  const { FontSize, Spacing, Layout } = useTheme();
  return StyleSheet.create({
    wrapperStyle: {
      borderRadius: 100,
      ...Layout.colCenter,
      ...Layout.selfCenter,
    },
    wrapperFullWidthStyle: {
      width: '100%',
      ...Layout.rowCenter,
    },
    wrapperPaddingMedium: {
      paddingVertical: Spacing.s,
      paddingHorizontal: Spacing.ml,
    },
    wrapperPaddingLarge: {
      paddingVertical: Spacing.ml,
      paddingHorizontal: Spacing.xl,
    },
    textStyleMedium: {
      fontSize: FontSize.small,
    },
    textStyleLarge: {
      fontSize: FontSize.regular,
    },
    textDisabled: {
      opacity: 0.5,
    },
  });
};
