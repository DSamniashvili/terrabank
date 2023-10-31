import React, { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';
import { DashboardTemplates, LanguageSwitcher, Text } from 'components';
import { openModal } from 'utils/modal';
import { storage } from 'storage/index';
import { useStyleTheme } from './DashboardScreen.style';
import { EasyLoginModal } from 'components/modals';

import { useLazyGetTemplatesQuery } from 'services/apis/dashboardAPI/dashboardAPI';
import { useEasyLoginModal } from 'components/modals/EasyLoginModal/hooks/useEasyLoginModal';
import { useLazyGetTrustedDevicesQuery } from 'services/apis';
import { clearCredentials, setCredentials } from 'utils/keychain';

export const DashboardScreen = () => {
  const styles = useStyleTheme();
  const dispatch = useAppDispatch();
  const { Fonts, darkMode: isDark } = useTheme();
  const { showEasyLoginPrompt, handleNavigateToAuthorizationMethodsScreeen } = useEasyLoginModal();
  const [getDashboardTemplates] = useLazyGetTemplatesQuery();
  const [getTrustedDevices] = useLazyGetTrustedDevicesQuery();

  const onChangeTheme = () => {
    dispatch(changeTheme({ darkMode: !isDark }));
  };

  useEffect(() => {
    getDashboardTemplates();
    // clearCredentials();
    // TODO - needs to be added
    getTrustedDevices();
  }, [getDashboardTemplates, getTrustedDevices]);

  useEffect(() => {
    showEasyLoginPrompt &&
      openModal({
        element: <EasyLoginModal handleNavigation={handleNavigateToAuthorizationMethodsScreeen} />,
      });
  }, [handleNavigateToAuthorizationMethodsScreeen, showEasyLoginPrompt]);

  //   TODO - temp!!
  const handleClearAllFromStorage = () => {
    storage.clearAll();
  };

  //   TODO - temp!!
  const handleClearLoginName = () => {
    setCredentials({ username: '' });
  };
  const handleClearCredentials = () => {
    clearCredentials();
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
      <Pressable onPress={handleClearLoginName}>
        <Text style={[Fonts.semiLarge]} children="clear user's loginName" />
      </Pressable>
      <Pressable onPress={handleClearCredentials}>
        <Text style={[Fonts.semiLarge]} children="clear credentials" />
      </Pressable>
    </View>
  );
};
