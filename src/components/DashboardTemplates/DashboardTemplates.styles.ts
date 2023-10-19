import { StyleSheet } from 'react-native';
import useTheme from 'hooks/useTheme';

export const useStyles = () => {
  const { Layout, Fonts, Colors, Spacing, FontSize } = useTheme();

  return StyleSheet.create({
    titleContainer: {
      ...Fonts.textBold,
      fontSize: FontSize.regularPlus,
      color: Colors.textBlack,
      fontWeight: '400',
    },
    dashboardTemplatesContainer: {
      marginHorizontal: Spacing.xl,
    },
    dashboardTemplatesWrapper: {
      ...Layout.row,
      ...Layout.justifyContentBetween,
      ...Layout.alignItemsCenter,
    },
    dashboardTemplatesContent: {
      paddingVertical: Spacing.xl,
    },
  });
};
