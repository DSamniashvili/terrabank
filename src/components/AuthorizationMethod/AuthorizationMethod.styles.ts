import { StyleSheet } from 'react-native';
import useTheme from 'hooks/useTheme';

export const useStyles = () => {
  const { Colors, Layout, FontSize } = useTheme();

  return StyleSheet.create({
    AuthorizationMethodContainer: {
      ...Layout.row,
      justifyContent: 'space-between',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: Colors.gray200,
      overflow: 'hidden',
    },
    AuthorizationMethodLeftContainer: {
      ...Layout.row,
      flex: 1,
      height: '100%',
    },
    iconContainer: {
      alignSelf: 'flex-start',
    },
    textContainer: {
      paddingHorizontal: 12,
      flexDirection: 'column',
      width: '80%',
    },
    AuthorizationMethodTitleStyle: {
      paddingBottom: 4,
      fontSize: FontSize.small,
      color: Colors.textBlack,
    },
    AuthorizationMethodDescStyle: {
      color: Colors.textBlack500,
    },

    AuthorizationMethodEnablerContainer: {},
  });
};
