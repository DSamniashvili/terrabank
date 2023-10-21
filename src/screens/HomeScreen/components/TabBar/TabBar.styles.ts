import { StyleSheet } from 'react-native';
import useTheme from 'hooks/useTheme';

const DISTANCE_BETWEEN_TABS = 25;

const useStyles = () => {
  const { Colors, Layout, Spacing } = useTheme();

  return StyleSheet.create({
    active: {
      color: Colors.primary,
    },
    inactive: {
      color: Colors.textBlack400,
    },
    container: {
      ...Layout.row,
      marginHorizontal: Spacing.ml,
    },
    tab: {
      marginTop: Spacing.ml,
      marginRight: DISTANCE_BETWEEN_TABS,
      height: 32,
    },
    divider: {
      ...Layout.absolute,
      backgroundColor: Colors.inputBlack50,
      bottom: Spacing.zero,
      left: Spacing.zero,
      right: Spacing.zero,
      height: 1,
    },
    indicator: {
      ...Layout.absolute,
      bottom: Spacing.zero,
      left: Spacing.zero,
      borderTopLeftRadius: Spacing.xxxs,
      borderTopRightRadius: Spacing.xxxs,
      backgroundColor: Colors.primary,
      height: 3,
    },
  });
};

export default useStyles;
