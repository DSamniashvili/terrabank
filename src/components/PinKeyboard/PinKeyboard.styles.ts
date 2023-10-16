import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Spacing } = useTheme();
  return StyleSheet.create({
    pinRow: {
      flexDirection: 'row',
      marginTop: Spacing.s,
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    lastRow: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
};
