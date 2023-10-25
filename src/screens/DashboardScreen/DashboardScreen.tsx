import React, { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';
import { DashboardTemplates, LanguageSwitcher, Text } from 'components';
import { closeModal, openModal } from 'utils/modal';
import { storage } from 'storage/index';
import { useStyleTheme } from './DashboardScreen.style';
import { useLazyGetTemplatesQuery } from 'services/apis/dashboardAPI/dashboardAPI';
import { EasyLoginModal } from 'components/modals';
import { MainNavigationProps } from 'navigation/types';
import { useNavigation } from '@react-navigation/native';
import {
  AUTHORIZATION_METHODS_SCREEN,
  PROFILE_STACK,
  SETTINGS_STACK,
} from 'navigation/ScreenNames';

export const DashboardScreen = () => {
  const styles = useStyleTheme();
  const dispatch = useAppDispatch();
  const { Fonts, darkMode: isDark } = useTheme();
  const [getDashboardTemplates] = useLazyGetTemplatesQuery();
  const { navigate } = useNavigation<MainNavigationProps<'DashboardStack'>>();

  useEffect(() => {
    getDashboardTemplates();
  }, [getDashboardTemplates]);

  const onChangeTheme = () => {
    dispatch(changeTheme({ darkMode: !isDark }));
  };

  const handleNavigatToAuthorizationMethodsScreeen = () => {
    closeModal();

    navigate(PROFILE_STACK, {
      screen: SETTINGS_STACK,
      params: { screen: AUTHORIZATION_METHODS_SCREEN },
    });
  };

  const handleModalPress = () => {
    openModal({
      element: <EasyLoginModal handleNavigation={handleNavigatToAuthorizationMethodsScreeen} />,
    });
  };

  //   TODO - temp!!
  const handleClearAllFromStorage = () => {
    storage.clearAll();
  };

  return (
    <View style={styles.container}>
      <LanguageSwitcher />

      <DashboardTemplates />
      <Text style={[Fonts.textSmall]} children="Home main Screen" />
      <Pressable onPress={onChangeTheme}>
        <Text style={[Fonts.textSmall]} children="Change theme" />
      </Pressable>
      <Pressable onPress={handleModalPress}>
        <Text style={[Fonts.textSmall]} children="Open modal" />
      </Pressable>
      <Pressable onPress={handleClearAllFromStorage}>
        <Text style={[Fonts.semiLarge]} children="Reset App!" />
      </Pressable>
    </View>
  );
};
