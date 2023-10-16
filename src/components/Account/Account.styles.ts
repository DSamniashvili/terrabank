import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { FontSize, Spacing } = useTheme();
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      marginHorizontal: Spacing.ml,
      paddingHorizontal: Spacing.xs,
      paddingVertical: Spacing.ml,
    },
    label: { paddingHorizontal: Spacing.xl, paddingVertical: Spacing.ml },
    user: {
      fontSize: FontSize.small,
    },
  });
};
