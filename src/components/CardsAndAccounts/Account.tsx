import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Divider, Text } from '../index';
import { Alert } from 'assets/SVGs';
import { formatMoney } from 'utils/formatMoney';
import { useStyles } from './CardsAndAccounts.styles';
import { AccountProps } from './CardsAndAccounts.types';
import { useTheme } from 'hooks';

export const Account: FC<AccountProps> = ({ item, isLast }) => {
  const styles = useStyles();
  const { Colors } = useTheme();
  return (
    <View style={styles.account}>
      <View style={styles.cardContainer}>
        <View style={styles.card} />
      </View>
      <View style={styles.details}>
        <View style={styles.nameContainer}>
          <Text children={item.name} size={14} color={Colors.textBlack500} />
          {item.isBlocked && <Alert />}
        </View>
        <View style={styles.balanceContainer}>
          <Text size={16} style={styles.bold}>
            {formatMoney(item.balance)} ₾
          </Text>
          <View style={styles.currencyWrapper}>
            <Pressable style={styles.currencySignContainer}>
              <Text label>₾</Text>
            </Pressable>
            <Pressable style={styles.currencySignContainer}>
              <Text label>$</Text>
            </Pressable>
            <Pressable style={styles.currencySignContainer}>
              <Text label>€</Text>
            </Pressable>
          </View>
        </View>
        {!isLast && <Divider height={1} marginTop={18} width="100%" />}
      </View>
    </View>
  );
};
