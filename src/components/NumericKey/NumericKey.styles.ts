import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Colors, FontSize, Spacing } = useTheme();
  return StyleSheet.create({
    pinItem: {
      width: 70,
      height: 70,
      borderRadius: Spacing.xxl,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    firstPinItem: {
      marginLeft: Spacing.zero,
    },

    pinItemText: {
      fontSize: FontSize.RegularPlus,
      color: Colors.pinColor,
    },
  });
};
