import { StyleSheet } from 'react-native';
import { FontSize, Spacing } from 'theme/Variables';

export default () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      top: -75,
      alignSelf: 'center',
      width: '100%',
      height: 90,
      paddingHorizontal: Spacing.ml,
      paddingVertical: Spacing.l,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
    },
    errorText: {
      flex: 1,

      marginLeft: Spacing.ml,
      fontSize: FontSize.tiny,
    },
    closeButton: {
      position: 'absolute',
      top: Spacing.s,
      right: Spacing.s,
    },
  });
};
