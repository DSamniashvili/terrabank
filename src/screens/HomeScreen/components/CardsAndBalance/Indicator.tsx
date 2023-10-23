import React, { FC } from 'react';
import { View } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { DotProps, IndicatorProps } from './types';
import useStyles from './styles';

const CARD_WIDTH = 320;

const Dot = ({ index, translateX }: DotProps) => {
  const styles = useStyles();

  const reanimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [(index - 1) * (CARD_WIDTH + 20), index * (CARD_WIDTH + 20), (index + 1) * (CARD_WIDTH + 20)],
      [0.6, 1, 0.6],
      Extrapolate.CLAMP,
    );

    const scale = interpolate(
      translateX.value,
      [(index - 1) * (CARD_WIDTH + 20), index * (CARD_WIDTH + 20), (index + 1) * (CARD_WIDTH + 20)],
      [0.9, 1.2, 0.9],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });
  return <Animated.View key={index} style={[styles.dot, reanimatedStyle]} />;
};

const Indicator: FC<IndicatorProps> = ({ data, translateX }) => {
  const styles = useStyles();
  return (
    <View style={styles.dotContainer}>
      {data.map((_, i) => {
        // if (i === 0) {
        //   return;
        // }
        return <Dot key={i} index={i} translateX={translateX} />;
      })}
    </View>
  );
};

export default Indicator;
