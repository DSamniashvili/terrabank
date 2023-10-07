import React from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './HomeScreen.style';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';
import { Text } from 'components/index';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { Fonts, darkMode: isDark } = useTheme();

  const onChangeTheme = () => {
    dispatch(changeTheme({ darkMode: !isDark }));
  };

  return (
    <View style={styles.container}>
      <Text style={[Fonts.textSmall]} children="Home main Screen" />
      <Pressable onPress={onChangeTheme}>
        <Text style={[Fonts.textSmall]} children="Change theme" />
      </Pressable>
    </View>
  );
};
