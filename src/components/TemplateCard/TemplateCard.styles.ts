import { StyleSheet } from 'react-native';
import useTheme from 'hooks/useTheme';
import { Spacing } from 'theme/Variables';

export const useStyles = () => {
  const { Layout, Fonts, FontSize, Colors } = useTheme();

  return StyleSheet.create({
    templateCardContainer: {
      ...Layout.col,
      ...Layout.justifyContentBetween,
      ...Layout.alignItemsCenter,
      width: 90,
      marginRight: Spacing.s,
    },
    discardRightMargin: {
      marginRight: Spacing.zero,
    },
    templateCardContentContainer: {
      ...Layout.colCenter,
      marginTop: Spacing.s,
    },
    templateCardTitle: {
      ...Fonts.titleSmall,
      fontWeight: '400',
    },
    templateCardContent: {
      fontSize: FontSize.tiny,

      color: Colors.textBlack500,
    },
  });
};
