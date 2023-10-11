import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleTheme = () => {
  const { Colors, FontSize, Spacing } = useTheme();
  return StyleSheet.create({
    pinItem: {
      width: 70,
      height: 70,
      borderRadius: Spacing.xxl,
      marginLeft: Spacing.m,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: Spacing.xxs,
      borderColor: Colors.textBlack400,
    },
    firstPinItem: {
      marginLeft: Spacing.zero,
    },
    pinItemText: {
      fontSize: FontSize.tiny,
      color: Colors.textBlack400,
    },
  });
};
