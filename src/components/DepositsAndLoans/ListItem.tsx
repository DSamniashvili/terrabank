import React, { FC } from 'react';
import { View } from 'react-native';
import { Divider, Text } from '../index';
import { formatMoney } from 'utils/formatMoney';
import { useTheme } from 'hooks';
import { ListItemProps } from './DepositsAndLoans.types';
import { useStyles } from './DepositsAndLoans.styles';

export const ListItem: FC<ListItemProps> = ({ item, isLast }) => {
  const styles = useStyles();
  const { Colors } = useTheme();

  return (
    <View style={styles.account}>
      <View style={styles.cardContainer} />
      <View style={styles.detailsWrapper}>
        <View style={styles.details}>
          <View>
            <Text regular children={item.name} size={14} color={Colors.textBlack500} />
            <Text size={16}>{formatMoney(item.balance)} ₾</Text>
          </View>
          {Object.keys(item).includes('interests') && (
            <View style={styles.interest}>
              <Text children="products.interest" label color={Colors.textBlack500} />
              <Text label color={Colors.success}>
                +220.08 ₾
              </Text>
            </View>
          )}
          {Object.keys(item).includes('fee') && (
            <View style={styles.fee}>
              <Text children="products.fee" label color={Colors.textBlack500} />
              <Text label color={Colors.error}>
                105.30 ₾
              </Text>
            </View>
          )}
        </View>
        {!isLast && <Divider height={1} marginTop={18} marginBottom={18} width="100%" />}
      </View>
    </View>
  );
};
