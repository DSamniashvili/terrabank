import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Colors, FontSize, Spacing } = useTheme();
  return StyleSheet.create({
    pinItem: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginLeft: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    firstPinItem: {
      marginLeft: Spacing.zero,
    },
    pinItemText: {
      fontSize: FontSize.regular,
      color: Colors.textBlack400,
    },
    hide: {
      display: 'none',
    },
  });
};
