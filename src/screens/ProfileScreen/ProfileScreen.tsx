import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './ProfileScreen.styles';
import useTheme from 'hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { SETTINGS_SCREEN } from 'navigation/ScreenNames';
import { ProfileStackScreenProps } from 'navigation/types';

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

      <TouchableOpacity onPress={() => navigate(SETTINGS_SCREEN)}>
        <Text>Navigate to settings</Text>
      </TouchableOpacity>
    </View>
  );
};
