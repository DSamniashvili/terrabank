import React, { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';
import { DashboardTemplates, LanguageSwitcher, Text } from 'components';
import { closeModal, openModal } from 'utils/modal';
import { storage } from 'storage/index';
import { useStyleTheme } from './DashboardScreen.style';
import { MainNavigationProps } from 'navigation/types';
import { useNavigation } from '@react-navigation/native';
import { EasyLoginModal } from 'components/modals';
import { useDashboardScreen } from './hooks/useDashboardScreen';
import {
  AUTHORIZATION_METHODS_SCREEN,
  PROFILE_STACK,
  SETTINGS_STACK,
} from 'navigation/ScreenNames';
import { useLazyGetTemplatesQuery } from 'services/apis/dashboardAPI/dashboardAPI';

export const DashboardScreen = () => {
  const styles = useStyleTheme();
  const dispatch = useAppDispatch();
  const { Fonts, darkMode: isDark } = useTheme();
  const navigation = useNavigation<MainNavigationProps<'DashboardStack'>>();
  const { showEasyLoginPrompt } = useDashboardScreen();
  const [getDashboardTemplates, { isLoading }] = useLazyGetTemplatesQuery();

  const onChangeTheme = () => {
    dispatch(changeTheme({ darkMode: !isDark }));
  };

  useEffect(() => {
    getDashboardTemplates();
  }, [getDashboardTemplates]);

  useEffect(() => {
    const handleNavigateToAuthorizationMethodsScreeen = () => {
      closeModal();

      navigation.navigate(PROFILE_STACK, {
        screen: SETTINGS_STACK,
        params: { screen: AUTHORIZATION_METHODS_SCREEN },
      });
    };

    if (navigation.isFocused() && showEasyLoginPrompt && !isLoading) {
      openModal({
        element: <EasyLoginModal handleNavigation={handleNavigateToAuthorizationMethodsScreeen} />,
      });
    }
  }, [navigation, navigation.navigate, showEasyLoginPrompt, isLoading]);

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
      <Pressable onPress={handleClearAllFromStorage}>
        <Text style={[Fonts.semiLarge]} children="Reset App!" />
      </Pressable>
    </View>
  );
};
