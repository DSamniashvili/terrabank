import React, { useEffect } from 'react';
import { Pressable, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import { DashboardTemplates, LanguageSwitcher, Text } from 'components';
import { openModal } from 'utils/modal';
import { storage } from 'storage/index';
import { useStyleTheme } from './DashboardScreen.style';
import { DashboardOperations } from 'components/DashboardOperations/DashboardOperations';
import { DashboardUpcomingOps } from 'components/DashboardUpcomingOps/DashboardUpcomingOps';

export const DashboardScreen = () => {
  const styles = useStyleTheme();

  const { Fonts } = useTheme();

  useEffect(() => {
    openModal({
      title: 'მოწყობილობის გასანდოება',
      element: (
        <View>
          <Text>asdasdasd</Text>
        </View>
      ),
    });
  }, []);
  // const onChangeTheme = () => {
  //   dispatch(changeTheme({ darkMode: !isDark }));
  // };

  // const handleModalPress = () => {
  //   openModal({
  //     element: <Text children="welcome:description" />,
  //   });
  // };

  //   TODO - temp!!
  const handleClearAllFromStorage = () => {
    storage.clearAll();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LanguageSwitcher />
      <DashboardTemplates />
      <DashboardUpcomingOps />
      <DashboardOperations />
      <Pressable onPress={handleClearAllFromStorage}>
        <Text style={[Fonts.semiLarge]} children="Reset App!" />
      </Pressable>
    </ScrollView>
  );
};
