import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from 'components';
import { Colors } from 'theme/Variables';
import { formatMoney } from 'utils/formatMoney';
import { ChevronUp, ChevronDown, Star, FullStar, Alert } from 'assets/SVGs';
import { CardSliderItemProps } from './AccountDetailsScreen.types';
import { useStyles } from './AccountDetailsScreen.styles';

export const CardSliderItem: FC<CardSliderItemProps> = ({ item }) => {
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <View>
        <Text title children={item.name} regular color={Colors.inactiveTint} />
        <View style={styles.balance}>
          <Text size={30} lineHeight={36} marginTop={10} color={Colors.white}>
            {formatMoney(item.debt ? -item.debt : item.isBlocked ? 0.0 : 48292.48)} ₾
          </Text>
          {!item.isBlocked && !item.debt && (
            <View style={styles.arrowContainer}>
              <Pressable onPress={() => {}}>
                <ChevronUp />
              </Pressable>
              <Pressable onPress={() => {}}>
                <ChevronDown />
              </Pressable>
            </View>
          )}
        </View>
      </View>
      {item.isBlocked || item.debt ? (
        <View style={styles.blockMessage}>
          <Alert color={Colors.white} />
          <Text
            label
            children={item.debt ? 'products.loanArrears' : 'products.accountBlocked'}
            color={Colors.white}
          />
        </View>
      ) : (
        <View style={styles.currencies}>
          <Pressable style={styles.currency}>
            <Text color={Colors.textWhite500} label size={11}>
              {formatMoney(1000000)} $
            </Text>
          </Pressable>
          <Pressable style={styles.currency}>
            <Text color={Colors.textWhite500} label size={11}>
              {formatMoney(300000)} €
            </Text>
          </Pressable>
          <Pressable style={styles.currency}>
            <Text color={Colors.textWhite500} label size={11}>
              {formatMoney(450000)} £
            </Text>
          </Pressable>
          <Pressable style={styles.currency}>
            <Text color={Colors.textWhite500} label size={11}>
              {formatMoney(125000)} ₽
            </Text>
          </Pressable>
          <Pressable style={styles.currency}>
            <Text color={Colors.textWhite500} label size={11}>
              {formatMoney(560000)} ₺
            </Text>
          </Pressable>
          <Pressable style={styles.currency}>
            <Text color={Colors.textWhite500} label size={11}>
              {formatMoney(200000)} ₺
            </Text>
          </Pressable>
        </View>
      )}
      {!item.isBlocked && !item.debt && (
        <Pressable style={styles.startContainer}>
          {item.isFavourite ? <FullStar /> : <Star />}
        </Pressable>
      )}
    </View>
  );
};
