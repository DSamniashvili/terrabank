import React, { FC } from 'react';
import { FlatList, ListRenderItem, Pressable, View } from 'react-native';
import { useTheme } from 'hooks';
import { Account } from './Account';
import { Divider, Text } from '../index';
import { Settings } from 'assets/SVGs';
import { formatMoney } from 'utils/formatMoney';
import { CardsAndAccountsProps, HeaderProps } from './CardsAndAccounts.types';
import { useStyles } from './CardsAndAccounts.styles';

const ListHeader: FC<HeaderProps> = ({ amount }) => {
  const styles = useStyles();
  const { Colors } = useTheme();
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerContainer}>
        <Text
          title
          color={Colors.textBlack500}
          translateProp={{ value: amount }}
          children="products.accountsAndCards"
        />
        <View style={styles.iconContainer}>
          <Settings />
        </View>
      </View>
      <Text size={30} lineHeight={36} bold>
        {formatMoney(8215)} ₾
      </Text>
    </View>
  );
};

const ListFooter = () => {
  const styles = useStyles();
  return (
    <Pressable style={styles.seeAll}>
      <Text children="transfers.all" special size={14} lineHeight={20} />
    </Pressable>
  );
};

export const CardsAndAccounts: FC<CardsAndAccountsProps> = ({ accounts }) => {
  const styles = useStyles();

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return <Account item={item} isLast={index === accounts.length - 1} />;
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={accounts}
        renderItem={renderItem}
        ListHeaderComponent={<ListHeader amount={accounts.length} />}
        ListFooterComponent={ListFooter}
        style={styles.flatlist}
      />
      <Divider marginTop={24} marginBottom={12} />
    </View>
  );
};
