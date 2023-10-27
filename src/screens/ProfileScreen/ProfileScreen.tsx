import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './ProfileScreen.styles';
import useTheme from 'hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackScreenProps } from 'navigation/types';
import { SETTINGS_SCREEN } from 'navigation/ScreenNames';
import { useLogoutUserMutation } from 'services/apis';

export const ProfileScreen = () => {
  const { Fonts } = useTheme();
  const { navigate, setOptions } = useNavigation<ProfileStackScreenProps<'ProfileScreen'>>();
  const [logoutUser] = useLogoutUserMutation();

  useEffect(() => {
    setOptions({
      title: 'navigation.more',
    });
  }, [setOptions]);

  const handleLogout = () => {
    const logoutReqBody = {};
    logoutUser(logoutReqBody);
  };

  return (
    <View style={styles.container}>
      <Text style={[Fonts.textSmall]}>Profile main Screen</Text>

      <TouchableOpacity onPress={() => navigate(SETTINGS_SCREEN)}>
        <Text>Navigate to settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout}>
        <Text>გასვლა</Text>
      </TouchableOpacity>
    </View>
  );
};
