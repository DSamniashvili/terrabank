import React from 'react';
import { FlatList, View } from 'react-native';
import { Button, Text } from 'components';
import { useStyles } from './DashboardOperations.styles';
import { useAppSelector } from 'store/hooks/useAppSelector';
import useTheme from 'hooks/useTheme';

import { OperationsCard } from 'components/OperationsCard/OperationsCard';
export const DashboardOperations = () => {
  const styles = useStyles();
  const { transactions } = useAppSelector(state => state.dashboard.templatesResponse);

  const { Colors } = useTheme();

  return (
    <View style={styles.dashboardTemplatesContainer}>
      <View style={styles.headerContainer}>
        <Text
          children={'dashboard.transactions'}
          style={styles.titleContainer}
          color={Colors.textBlack}
        />
      </View>
      <View style={styles.dashboardTemplatesWrapper}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={transactions}
          renderItem={({ item }) => {
            return <OperationsCard {...item} />;
          }}
          keyExtractor={index => String(index)}
        />
      </View>
      <Button.Text
        customWrapperStyle={{
          paddingVertical: 0,
          paddingHorizontal: 0,
        }}
        children={
          <Text children={'dashboard.all'} style={styles.titleContainer} color={Colors.primary} />
        }
      />
    </View>
  );
};
