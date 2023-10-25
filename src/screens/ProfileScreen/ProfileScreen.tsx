import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './ProfileScreen.styles';
import useTheme from 'hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackScreenProps } from 'navigation/types';
import { SETTINGS_SCREEN, SETTINGS_STACK } from 'navigation/ScreenNames';

export const ProfileScreen = () => {
  const { Fonts } = useTheme();
  const { navigate, setOptions } = useNavigation<ProfileStackScreenProps<'ProfileScreen'>>();

  useEffect(() => {
    setOptions({
      title: 'navigation.more',
    });
  }, [setOptions]);

  return (
    <View style={styles.container}>
      <Text style={[Fonts.textSmall]}>Profile main Screen</Text>

      <TouchableOpacity onPress={() => navigate(SETTINGS_STACK, { screen: SETTINGS_SCREEN })}>
        <Text>Navigate to settings</Text>
      </TouchableOpacity>
    </View>
  );
};
