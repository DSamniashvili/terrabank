import { StyleSheet } from 'react-native';
import useTheme from 'hooks/useTheme';
import { config } from 'utils/config';

const { mobileWidth } = config;

const useStyles = () => {
  const { Colors, Layout, Spacing, FontSize, Fonts } = useTheme();

  return StyleSheet.create({
    itemContainer: {
      width: mobileWidth - 2 * Spacing.xl,
    },
    imageContainer: {
      height: 300,
    },
    dotContainer: {
      ...Layout.selfCenter,
      ...Layout.row,
      marginTop: 45,
      gap: 8,
    },
    dot: {
      width: 4,
      height: 4,
      borderRadius: 2,
    },
    buttonContainer: {
      marginTop: 50,
    },
    textContainer: {
      ...Layout.alignItemsCenter,
      marginTop: 32,
    },
    title: {
      color: Colors.textBlack,
      fontSize: FontSize.extraLarge,
      ...Fonts.textCenter,
    },
    desc: {
      ...Fonts.textCenter,
      marginTop: 30,
      color: Colors.inactiveTint,
    },
    card: {
      ...Layout.fill,
    },
    list: {
      marginTop: Spacing.xxl,
    },
    skipLabel: {
      color: Colors.textBlack500,
    },
  });
};

export default useStyles;
