import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Spacing, Colors, FontSize, Layout } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      ...Layout.center,
      paddingBottom: Spacing.xxl,
    },
    innerTopContainer: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: FontSize.large,
      marginBottom: 20,
      color: Colors.textBlack,
    },
    label: {
      fontSize: FontSize.small,
      marginBottom: 50,
      color: Colors.textBlack500,
    },

    pinWrapper: {
      alignItems: 'center',
      width: '80%',
      justifyContent: 'flex-end',
      marginTop: 70,
    },
  });
};
