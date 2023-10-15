import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Spacing } = useTheme();
  return StyleSheet.create({
    pinRow: {
      flexDirection: 'row',
      marginTop: Spacing.s,
      justifyContent: 'center',
      alignItems: 'center',
    },
    lastRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
};
