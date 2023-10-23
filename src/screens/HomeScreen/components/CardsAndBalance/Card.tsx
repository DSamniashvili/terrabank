import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { ArrowRight } from 'assets/SVGs';
import { CardProps } from './types';
import useStyles from './styles';

const CARD_WIDTH = 320;

export const Card = ({ item, index, onCardPress, onSpacePress, progress, isLast }: CardProps) => {
  const styles = useStyles();

  const height = useAnimatedStyle(() => {
    const value = interpolate(progress.value, [0, 1], [120, 180], Extrapolation.CLAMP);

    return {
      height: value,
    };
  });

  const firstCard = useAnimatedStyle(() => {
    const val = interpolate(progress.value, [0, 1], [300, 20], Extrapolation.CLAMP);

    return {
      left: val,
    };
  });

  const secondCard = useAnimatedStyle(() => {
    const val = interpolate(progress.value, [0, 1], [350, CARD_WIDTH + 20], Extrapolation.CLAMP);

    return {
      left: val,
    };
  });

  const left = useAnimatedStyle(() => {
    const val = interpolate(
      progress.value,
      [0, 1],
      [index * CARD_WIDTH, index * CARD_WIDTH + 20],
      Extrapolation.CLAMP,
    );
    return {
      left: val,
    };
  });

  return (
    <Animated.View
      style={[
        { position: 'absolute' },
        index === 0 && firstCard,
        index === 1 && secondCard,
        index > 1 && left,
      ]}
    >
      <View style={{ flexDirection: 'row' }}>
        <Pressable onPress={onCardPress}>
          <Animated.View style={[styles.card, { backgroundColor: item.color }, height]}>
            <Text style={styles.text}>{item.name}</Text>
          </Animated.View>
        </Pressable>
        {isLast && (
          <Pressable style={[styles.closeButton]} onPress={onSpacePress}>
            <View style={styles.iconContainer}>
              <ArrowRight />
            </View>
          </Pressable>
        )}
      </View>
    </Animated.View>
  );
};
