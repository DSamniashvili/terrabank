import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Spacing } = useTheme();
  return StyleSheet.create({
    pinRow: {
      marginLeft: 25,
      flexDirection: 'row',
      marginTop: Spacing.s,
      height: 50,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    lastRow: {
      marginTop: Spacing.s,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    withoutFingerPrint: {
      width: 80,
    },
  });
};
