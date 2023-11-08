import React, { FC } from 'react';
import { FlatList, ListRenderItem, Pressable, View } from 'react-native';
import { useTheme } from 'hooks';
import { ListItem } from './ListItem';
import { Divider, Text } from '../index';
import { formatMoney } from 'utils/formatMoney';
import { useStyles } from './DepositsAndLoans.styles';
import { DepositsProps, HeaderProps } from './DepositsAndLoans.types';

const ListHeader: FC<HeaderProps> = ({ variant, amount }) => {
  const styles = useStyles();
  const { Colors } = useTheme();
  return (
    <View style={styles.header}>
      <Text
        size={14}
        lineHeight={20}
        color={Colors.textBlack500}
        translateProp={{ value: amount }}
        children={variant === 'deposit' ? 'products.deposits' : 'products.loans'}
      />
      <Text size={30} lineHeight={36} bold marginTop={8}>
        {formatMoney(22871)} ₾
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

export const DepositsAndLoans: FC<DepositsProps> = ({ data, variant }) => {
  const styles = useStyles();

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return <ListItem item={item} isLast={index === data.length - 1} />;
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListFooterComponent={ListFooter}
        ListHeaderComponent={<ListHeader variant={variant} amount={data.length} />}
        style={styles.list}
      />
      {variant === 'deposit' && <Divider marginTop={24} marginBottom={12} />}
    </View>
  );
};
