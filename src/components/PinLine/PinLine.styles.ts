import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Colors } = useTheme();
  return StyleSheet.create({
    pinContent: {
      flexDirection: 'row',
      width: 100,
      justifyContent: 'space-between',
    },
    pinItem: {
      width: 14,
      height: 14,
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: Colors.textBlack,
    },
    filled: {
      backgroundColor: Colors.textBlack,
      borderColor: Colors.textBlack,
    },
  });
};
