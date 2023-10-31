import React from 'react';
import { FlatList, View } from 'react-native';
import { TemplateCard, Text } from 'components';
import { useStyles } from './DashboardTemplates.styles';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { getDashboardTemplates } from './utils/DashboardTemplatesMapper.utils';
import useTheme from 'hooks/useTheme';

export const DashboardTemplates = () => {
  const styles = useStyles();
  const { templates } = useAppSelector(state => state.dashboard.templatesResponse);
  const dashboardTemplates = getDashboardTemplates(templates);
  const { Colors } = useTheme();
  // const { navigate } = useNavigation<DashboardStackScreenProps<'DashboardScreen'>>();

  // const handleNavigation = () => {
  //   navigate(ALL_TEMPLATES_SCREEN);
  // };

  return (
    <View style={styles.dashboardTemplatesContainer}>
      <View style={styles.headerContainer}>
        <Text
          children={'dashboard.templates'}
          style={styles.titleContainer}
          color={Colors.textBlack}
        />
      </View>
      <View style={styles.dashboardTemplatesWrapper}>
        <FlatList
          style={styles.dashboardTemplatesContent}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dashboardTemplates}
          renderItem={({ item, index }) => {
            const isLastItem = index === dashboardTemplates?.length - 1;
            return <TemplateCard {...item} isLastItem={isLastItem} />;
          }}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </View>
  );
};
