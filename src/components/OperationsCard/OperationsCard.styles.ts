import { StyleSheet } from 'react-native';
import useTheme from 'hooks/useTheme';
import { Spacing } from 'theme/Variables';

export const useStyles = () => {
  const { Layout, FontSize, Colors } = useTheme();

  return StyleSheet.create({
    templateCardContainer: {
      ...Layout.row,
      ...Layout.justifyContentBetween,
      ...Layout.alignItemsCenter,

      marginRight: Spacing.s,
    },
    wrapper: {
      ...Layout.row,
      ...Layout.justifyContentBetween,
      ...Layout.alignItemsCenter,
    },
    discardRightMargin: {
      marginRight: Spacing.zero,
    },
    customIconComponentStyles: {
      width: 48,
      height: 48,
    },
    templateCardContentContainer: {
      marginTop: Spacing.s,
    },
    templateCardTitle: {
      fontSize: FontSize.small,
      color: Colors.textBlack,
      fontWeight: '400',
    },
    dateText: {
      fontSize: FontSize.dwarf,
      color: Colors.textBlack,
      fontWeight: '400',
    },
    templateCardContent: {
      fontSize: FontSize.dwarf,
      color: Colors.textBlack500,
    },
  });
};
