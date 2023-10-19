import React from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './DashboardScreen.style';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';
import { LanguageSwitcher, Text } from 'components';
import { openModal } from 'utils/modal';

export const DashboardScreen = () => {
  const dispatch = useAppDispatch();
  const { Fonts, darkMode: isDark } = useTheme();

  const onChangeTheme = () => {
    dispatch(changeTheme({ darkMode: !isDark }));
  };

  const handleModalPress = () => {
    openModal({
      element: <Text children="welcome:description" />,
    });
  };

  return (
    <View style={styles.container}>
      <LanguageSwitcher />

      <Text style={[Fonts.textSmall]} children="Home main Screen" />
      <Pressable onPress={onChangeTheme}>
        <Text style={[Fonts.textSmall]} children="Change theme" />
      </Pressable>
      <Pressable onPress={handleModalPress}>
        <Text style={[Fonts.textSmall]} children="Open modal" />
      </Pressable>
    </View>
  );
};
