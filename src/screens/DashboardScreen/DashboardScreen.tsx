import React from 'react';
import { Pressable, View, ScrollView } from 'react-native';
import useTheme from 'hooks/useTheme';
import {
  DashboardAssets,
  DashboardTemplates,
  DashboardOperations,
  DashboardUpcomingOps,
  LanguageSwitcher,
  Text,
  Banker,
} from 'components';

import { storage } from 'storage/index';
import { useStyleTheme } from './DashboardScreen.style';
import { DashboardPensionFund } from 'components/DashboardPensionFund/DashboardPensionFund';

export const DashboardScreen = () => {
  const styles = useStyleTheme();
  const { Fonts } = useTheme();

  const handleClearAllFromStorage = () => {
    storage.clearAll();
  };

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.containerFlex}>
      <LanguageSwitcher />
      <View style={styles.cardContainerFull}>
        <DashboardTemplates />
      </View>
      <View style={styles.cardContainerFull}>
        <DashboardUpcomingOps />
      </View>
      <View style={styles.cardContainer}>
        <DashboardAssets />
      </View>

      <View style={styles.cardContainer}>
        <DashboardPensionFund />
      </View>
      <View style={styles.cardContainer}>
        <Banker />
      </View>
      <View style={styles.cardContainer}>
        <DashboardOperations />
      </View>

      <Pressable onPress={handleClearAllFromStorage}>
        <Text style={[Fonts.semiLarge]} children="Reset App!" />
      </Pressable>
    </ScrollView>
  );
};
