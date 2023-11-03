import { StyleSheet } from 'react-native';
import { useDefaultHeaderHeight } from 'hooks/useDefaultHeaderHeight';
import useTheme from 'hooks/useTheme';
import { config } from 'utils/config';

export const useStyles = () => {
  const { Spacing, Layout, Colors, FontSize } = useTheme();
  const { headerHeight } = useDefaultHeaderHeight();

  return StyleSheet.create({
    wrapper: {
      ...Layout.fill,
    },
    sectionList: {
      ...Layout.overflowHidden,
      width: config.mobileWidth,
      borderTopLeftRadius: Spacing.xl,
      borderTopRightRadius: Spacing.xl,
    },
    sectionListContent: {
      ...Layout.overflowHidden,
      width: config.mobileWidth,
      paddingBottom: headerHeight + 160,
      borderTopLeftRadius: Spacing.l,
      borderTopRightRadius: Spacing.l,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    item: {
      padding: Spacing.lg,
      marginVertical: Spacing.s,
    },
    header: {
      fontSize: FontSize.extraLarge,
      backgroundColor: Colors.white,
    },
  });
};
