import { StyleSheet } from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      top: -75,
      alignSelf: 'center',
      width: '100%',
      height: 90,
      paddingHorizontal: 16,
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
    },
    toastText: {
      paddingHorizontal: 10,
    },
    errorText: {
      flex: 1,

      marginLeft: 16,
      fontSize: 12,
    },
    closeButton: {
      position: 'absolute',
      top: 8,
      right: 8,
    },
  });
};
