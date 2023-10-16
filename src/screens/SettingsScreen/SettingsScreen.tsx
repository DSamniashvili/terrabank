import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './SettingsScreen.styles';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';
import { ProfileStackScreenProps } from 'navigation/types';
import { useNavigation } from '@react-navigation/native';
import { AUTHORIZATION_METHODS_SCREEN } from 'navigation/ScreenNames';

export const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const { Fonts, darkMode: isDark } = useTheme();
  const { navigate } = useNavigation<ProfileStackScreenProps<'SettingsScreen'>>();

  const onChangeTheme = () => {
    dispatch(changeTheme({ darkMode: !isDark }));
  };

  return (
    <View style={styles.container}>
      <Text style={[Fonts.textSmall]}>Settings main Screen</Text>
      <Pressable onPress={onChangeTheme}>
        <Text style={[Fonts.textSmall]} children="Change theme" />
      </Pressable>
      <TouchableOpacity onPress={() => navigate(AUTHORIZATION_METHODS_SCREEN)}>
        <Text>Navigate to authorization methods screen</Text>
      </TouchableOpacity>
    </View>
  );
};
