import React, { FC } from 'react';
import { FlatList, ListRenderItem, Pressable, View } from 'react-native';
import { useTheme } from 'hooks';
import { ListItem } from './ListItem';
import { Divider, Text } from '../index';
import { formatMoney } from 'utils/formatMoney';
import { useStyles } from './DepositsAndLoans.styles';
import { DepositsAndLoansProps, HeaderProps } from './DepositsAndLoans.types';

const ListHeader: FC<HeaderProps> = ({ variant, quantity, totalAmount }) => {
  const styles = useStyles();
  const { Colors } = useTheme();
  return (
    <View style={styles.header}>
      <Text
        size={14}
        lineHeight={20}
        color={Colors.textBlack500}
        translateProp={{ value: quantity }}
        children={variant === 'deposit' ? 'products.deposits' : 'products.loans'}
      />
      <Text size={30} regular lineHeight={36} marginTop={8}>
        {formatMoney(totalAmount || 0)} ₾
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

export const DepositsAndLoans: FC<DepositsAndLoansProps> = ({
  data,
  totalAmount,
  variant,
  seeAll,
}) => {
  const styles = useStyles();

  if (!data) {
    return null;
  }

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return <ListItem item={item} variant={variant} isLast={index === data.length - 1} />;
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={seeAll ? data : data.slice(0, variant === 'deposit' ? 2 : 4)}
        renderItem={renderItem}
        ListFooterComponent={ListFooter}
        ListHeaderComponent={
          <ListHeader totalAmount={totalAmount} variant={variant} quantity={data.length} />
        }
        style={styles.list}
      />
      {variant === 'deposit' && <Divider marginTop={24} marginBottom={12} />}
    </View>
  );
};
