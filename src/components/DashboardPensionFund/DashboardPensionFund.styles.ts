import { StyleSheet } from 'react-native';
import useTheme from 'hooks/useTheme';
import { Spacing } from 'theme/Variables';

export const useStyles = () => {
  const { Layout, Fonts, FontSize } = useTheme();

  return StyleSheet.create({
    dashboardTemplatesContainer: {
      ...Layout.col,
    },
    titleContainer: {
      ...Fonts.textBold,
      fontSize: FontSize.regularPlus,
      fontWeight: '400',
    },
    wrapper: { marginTop: Spacing.m },
  });
};
