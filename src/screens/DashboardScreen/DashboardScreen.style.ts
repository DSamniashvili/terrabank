import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';
import { config } from 'utils/config';

export const useStyleTheme = () => {
  const { Spacing, Layout, FontSize, Colors, MetricsSizes } = useTheme();

  return StyleSheet.create({
    container: {
      ...Layout.fullSize,
      ...Layout.justifyContentStart,
      paddingHorizontal: Spacing.xl,
      paddingTop: Spacing.xxl - Spacing.xxs,
      borderTopLeftRadius: Spacing.ml,
      borderTopRightRadius: Spacing.ml,
      flex: 1,
    },
    wrapper: {
      ...Layout.fill,
    },
    sectionList: {
      ...Layout.overflowHidden,
      width: config.mobileWidth,
      borderTopLeftRadius: Spacing.ml,
      borderTopRightRadius: Spacing.ml,
    },
    sectionListContent: {
      flexGrow: 1,
      ...Layout.overflowHidden,
      width: config.mobileWidth,
      paddingBottom: 230,
      borderTopLeftRadius: Spacing.ml,
      borderTopRightRadius: Spacing.ml,
    },
    item: {
      padding: Spacing.lg,
      marginVertical: Spacing.s,
    },
    header: {
      fontSize: FontSize.extraLarge,
      backgroundColor: Colors.white,
    },
    otherBanksWrapper: {
      width: config.mobileWidth,
      marginTop: MetricsSizes.regular,
      padding: Spacing.xl,
    },
  });
};
