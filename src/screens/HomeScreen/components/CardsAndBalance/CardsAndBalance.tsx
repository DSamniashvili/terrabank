import React, { useRef, useState } from 'react';
import { View, Pressable } from 'react-native';
import Animated, {
  withTiming,
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import Indicator from './Indicator';
import AvailableBalance from './AvailableBalance';
import { CreditCard, Smartphone, Swap } from 'assets/SVGs';
import useStyles from './styles';
import { Card } from './Card';

const CARD_WIDTH = 320;

const data = [
  {
    name: 'FIRST CARD',
    color: '#922a69',
  },
  {
    name: 'SECOND CARD',
    color: '#000',
  },
  {
    name: 'THIRD CARD',
    color: 'tomato',
  },
];

const CardsAndBalance = () => {
  const styles = useStyles();
  const ref = useRef<any>(null);
  const progress = useSharedValue(0);
  const translateX = useSharedValue(0);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const onCardPress = (index: number) => {
    ref.current?.scrollTo({
      x: index * CARD_WIDTH,
      y: 0,
      animated: true,
    });
    setScrollEnabled(true);
    progress.value = withTiming(1);
  };

  const onSpacePress = () => {
    ref.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
    setScrollEnabled(false);
    progress.value = withTiming(0);
  };

  const scrollViewWrapper = useAnimatedStyle(() => {
    const height = interpolate(progress.value, [0, 1], [180, 240], Extrapolation.CLAMP);
    return {
      height,
    };
  });

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  const actionButtons = useAnimatedStyle(() => {
    const int = interpolate(progress.value, [0, 1], [0, 1]);
    const h = interpolate(progress.value, [0, 1], [0, 100]);

    return {
      transform: [{ scale: int }],
      opacity: int,
      height: h,
    };
  });

  return (
    <View>
      <Animated.View style={[styles.wrapper, scrollViewWrapper]}>
        <Animated.ScrollView
          ref={ref}
          horizontal
          pagingEnabled
          bounces={false}
          decelerationRate="fast"
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          snapToInterval={CARD_WIDTH}
          scrollEnabled={scrollEnabled}
          disableIntervalMomentum={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[{ width: data.length * (CARD_WIDTH + 40) }]}
        >
          {data.map((card, index) => (
            <Card
              item={card}
              index={index}
              progress={progress}
              translateX={translateX}
              isLast={data.length - 1 === index}
              onSpacePress={onSpacePress}
              onCardPress={() => onCardPress(index)}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <Animated.View style={[actionButtons]}>
        <View style={styles.actionButtonContainer}>
          <Pressable onPress={() => {}} style={styles.actionButton}>
            <Swap />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.actionButton}>
            <CreditCard />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.actionButton}>
            <Smartphone />
          </Pressable>
        </View>
        <Indicator data={data} translateX={translateX} />
      </Animated.View>
      <AvailableBalance progress={progress} />
    </View>
  );
};

export default CardsAndBalance;
