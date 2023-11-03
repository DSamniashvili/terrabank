import { useDefaultHeaderHeight, useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Layout, Spacing, FontSize } = useTheme();
  const { headerHeight } = useDefaultHeaderHeight();

  return StyleSheet.create({
    container: {
      ...Layout.justifyContentEnd,
      height: headerHeight,
    },
    text: {
      marginBottom: Spacing.ml,
      marginLeft: Spacing.xl,
      fontSize: FontSize.large,
      lineHeight: 28,
    },
  });
};
