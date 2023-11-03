import React from 'react';
import { FlatList, View } from 'react-native';
import { Button, TemplateCard, Text } from 'components';
import { useStyles } from './DashboardTemplates.styles';
import { mapDashboardTemplates } from './utils/DashboardTemplatesMapper.utils';
import useTheme from 'hooks/useTheme';
import { DashboardStackScreenProps } from 'navigation/types';
import { useNavigation } from '@react-navigation/native';
import { ALL_TEMPLATES_SCREEN } from 'navigation/ScreenNames';
import { useAppSelector } from 'store/hooks/useAppSelector';

export const DashboardTemplates = () => {
  const styles = useStyles();
  const { Colors } = useTheme();
  const { navigate } = useNavigation<DashboardStackScreenProps<'DashboardScreen'>>();
  const { templates } = useAppSelector(state => state.dashboard.templatesResponse);
  const mappedDashboardTemplates = mapDashboardTemplates(templates || []);

  const handleNavigation = () => {
    navigate(ALL_TEMPLATES_SCREEN);
  };

  return (
    <View style={styles.dashboardTemplatesContainer}>
      <View style={styles.headerContainer}>
        <Text
          children={'dashboard.templates'}
          style={styles.titleContainer}
          color={Colors.textBlack}
        />
        <Button.Text
          onPress={handleNavigation}
          customWrapperStyle={{
            paddingVertical: 0,
            paddingHorizontal: 0,
          }}
          children={
            <Text children={'dashboard.all'} style={styles.titleContainer} color={Colors.primary} />
          }
        />
      </View>
      <View style={styles.dashboardTemplatesWrapper}>
        <FlatList
          style={styles.dashboardTemplatesContent}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={mappedDashboardTemplates}
          renderItem={({ item, index }) => {
            const isLastItem = index === mappedDashboardTemplates?.length - 1;
            return <TemplateCard {...item} isLastItem={isLastItem} />;
          }}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </View>
  );
};
