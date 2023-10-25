import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './ProductsScreen.style';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { MODAL_SCREEN_ONE, MODAL_STACK } from 'navigation/ScreenNames';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamsList } from 'navigation/types';

export const ProductsScreen = () => {
  const dispatch = useAppDispatch();
  const { Fonts, darkMode: isDark } = useTheme();
  const { navigate } = useNavigation<StackNavigationProp<MainStackParamsList>>();

  const onChangeTheme = () => {
    dispatch(changeTheme({ darkMode: !isDark }));
  };

  const handleOpenModal = () => {
    navigate(MODAL_STACK, { screen: MODAL_SCREEN_ONE });
  };

  return (
    <View style={styles.container}>
      <Text style={[Fonts.textSmall]}>Products main Screen</Text>
      <Pressable onPress={onChangeTheme}>
        <Text style={[Fonts.textSmall]} children="Change theme" />
      </Pressable>
      <Pressable onPress={handleOpenModal}>
        <Text style={[Fonts.textSmall]} children="Open modal screen" />
      </Pressable>
    </View>
  );
};
