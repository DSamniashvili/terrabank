import React from 'react';
import { FlatList, ListRenderItem, Pressable, View } from 'react-native';
import { Text } from '../index';
import { useStyles } from './LastTransactions.styles';
import LastTransactionItem from './LastTransactionItem';
import { ILastTransaction } from './LastTransaction.types';

const data = [
  {
    name: 'გივი დაუთაშვილი',
    iban: 'GE07BS*****3232 GEL',
    amount: 320.5,
    date: '20 სექ, 2021, 12:20',
  },
  {
    name: 'თემო გაბეჩავა',
    iban: 'GE07BS*****3232 GEL',
    amount: 410,
    date: '20 სექ, 2021, 12:20',
  },
  {
    name: 'ზურა ჭავჭანიძე',
    iban: '01019052736',
    amount: 250,
    date: '20 სექ, 2021, 12:20',
  },
  {
    name: 'გივი დაუთაშვილი',
    iban: '01019052736',
    amount: 25.7,
    date: '20 სექ, 2021, 12:20',
  },
];

export const LastTransactions = () => {
  const styles = useStyles();

  const renderItem: ListRenderItem<ILastTransaction> = ({ item, index }) => {
    return <LastTransactionItem item={item} index={index} />;
  };

  const footer = () => {
    return (
      <Pressable style={styles.seeAll}>
        <Text children="transfers.all" special size={14} lineHeight={20} />
      </Pressable>
    );
  };

  return (
    <>
      <View style={styles.header}>
        <Text children="transfers.lastTransactions" />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={footer}
        style={styles.list}
      />
    </>
  );
};
