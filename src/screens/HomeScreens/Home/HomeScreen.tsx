import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './HomeScreen.style';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { Fonts, Colors, darkMode: isDark } = useTheme();

  const onChangeTheme = () => {
    dispatch(changeTheme({ darkMode: !isDark }));
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <Text style={[Fonts.textSmall]}>HomeScreen</Text>
      <Pressable onPress={onChangeTheme}>
        <Text style={[Fonts.textSmall]} children="Change theme" />
      </Pressable>
    </View>
  );
};

export default HomeScreen;
