import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { FontSize, Spacing, Layout, BorderRadius, Colors, Fonts } = useTheme();
  return StyleSheet.create({
    container: {
      ...Layout.row,
      ...Layout.justifyContentBetween,
      ...Layout.alignItemsCenter,
      backgroundColor: 'rgba(246, 246, 246, 1)',
      paddingHorizontal: Spacing.ml,
      paddingTop: Spacing.ml,
      height: 96,
    },
    initialContainer: {
      height: 116,
    },
    leftContainer: {
      ...Layout.row,
      ...Layout.justifyContentStart,
      ...Layout.growfull,
      maxWidth: '30%',
    },
    centerContainer: {
      ...Layout.growfull,
      ...Layout.rowCenter,
      flex: 1,
      maxWidth: '50%',
      paddingHorizontal: 'auto',
      marginHorizontal: 'auto',
    },
    rightContainer: {
      ...Layout.row,
      ...Layout.justifyContentEnd,
      maxWidth: '30%',
      ...Layout.growfull,
    },
    componentsWrapper: {
      ...Layout.row,
    },
    text: {
      color: Colors.titleBlack,
      ...Fonts.textCenter,
      fontSize: FontSize.small,
    },
    isInitialScreenText: {
      ...Fonts.textBold,
      fontSize: FontSize.RegularPlus,
    },
    iconCommonStyles: {
      width: 32,
      height: 32,
      ...Layout.center,
    },
    iconRoundedStyles: {
      borderRadius: BorderRadius.full,
      borderColor: Colors.gray200,
      borderWidth: 1,
      padding: Spacing.xs,
      margin: Spacing.xs,
    },
  });
};