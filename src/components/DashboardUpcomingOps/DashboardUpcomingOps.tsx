import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'components';
import { useStyles } from './DashboardUpcoming.styles';
import useTheme from 'hooks/useTheme';
import { UpcomingOpsCard } from 'components/UpcomingOpsCard/UpcomingOpsCard';
import Images from 'theme/Images';

export const DashboardUpcomingOps = () => {
  const UpcomingOpsArr = [
    {
      id: 1,
      icon: Images().BasisBankLogoIcon,
      title: 'სესხის გადასახადი',
      amount: '130.00ლ',
      date: 'დღეს',
    },
    {
      id: 2,
      icon: Images().BasisBankLogoIcon,
      title: 'ჯეოსელი',
      amount: '130.00ლ',
      date: 'დღეს',
    },
    {
      id: 3,
      icon: Images().BasisBankLogoIcon,
      title: 'მაგთი',
      amount: '130.00ლ',
      date: 'დღეს',
    },
    {
      id: 4,
      icon: Images().BasisBankLogoIcon,
      title: 'კაზინო',
      amount: '130.00ლ',
      date: 'დღეს',
    },
    {
      id: 5,
      icon: Images().BasisBankLogoIcon,
      title: 'შავი დღისთვინა',
      amount: '130.00ლ',
      date: 'დღეს',
    },
  ];
  const styles = useStyles();
  const { Colors } = useTheme();

  return (
    <View style={styles.dashboardTemplatesContainer}>
      <View style={styles.headerContainer}>
        <Text
          children={'dashboard.upcomingTransactions'}
          style={styles.titleContainer}
          color={Colors.textBlack}
        />
      </View>
      <View style={styles.dashboardTemplatesWrapper}>
        <FlatList
          style={styles.dashboardTemplatesContent}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={UpcomingOpsArr}
          renderItem={({ item }) => {
            return <UpcomingOpsCard {...item} />;
          }}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </View>
  );
};
