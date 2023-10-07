import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './ProductsScreen.style';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';

export const ProductsScreen = () => {
  const dispatch = useAppDispatch();
  const { Fonts, darkMode: isDark } = useTheme();

  const onChangeTheme = () => {
    dispatch(changeTheme({ darkMode: !isDark }));
  };

  return (
    <View style={styles.container}>
      <Text style={[Fonts.textSmall]}>Products main Screen</Text>
      <Pressable onPress={onChangeTheme}>
        <Text style={[Fonts.textSmall]} children="Change theme" />
      </Pressable>
    </View>
  );
};
