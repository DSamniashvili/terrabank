import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { FontSize, Spacing, Layout, Colors } = useTheme();
  return StyleSheet.create({
    container: {
      top: -75,
      height: 90,
      paddingHorizontal: Spacing.ml,
      paddingVertical: Spacing.l,
      backgroundColor: Colors.white,
      ...Layout.absolute,
      ...Layout.justifyContentStart,
      ...Layout.selfCenter,
      ...Layout.fullWidth,
      ...Layout.row,
    },
    errorText: {
      ...Layout.fill,
      marginLeft: Spacing.ml,
      fontSize: FontSize.tiny,
    },
    closeButton: {
      ...Layout.absolute,
      top: Spacing.s,
      right: Spacing.s,
    },
  });
};
