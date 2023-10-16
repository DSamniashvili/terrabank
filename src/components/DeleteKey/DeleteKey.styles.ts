import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  return StyleSheet.create({
    pinItem: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
