import React, { FC, useEffect, useRef } from 'react';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import Animated, {
  withTiming,
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { Card } from './Card';
import Indicator from './Indicator';
import { config } from 'utils/config';
import useTheme from 'hooks/useTheme';

import AvailableBalance from './AvailableBalance';
import { setShouldCloseCards } from 'store/slices/Dashboard';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { ICardsAndBalanceProps } from './CardsAndBalance.types';
import useStyles from './CardsAndBalance.styles';
import { ActionButtons } from './ActionButtons';

const CARD_WIDTH = config.mobileWidth - 48;

const data = [
  {
    color: '#922a69',
  },
  {
    color: '#1F1E24',
  },
  {
    color: '#922a69',
  },
  {
    color: '#922a69',
  },
  {
    color: '#922a69',
  },
  {
    color: '#922a69',
  },
  {
    color: '#922a69',
  },
];

export const CardsAndBalance: FC<ICardsAndBalanceProps> = ({ anim, zIndex, translateY }) => {
  const styles = useStyles();
  const { Colors } = useTheme();
  const dispatch = useDispatch();
  const ref = useRef<Animated.ScrollView>(null);
  const progress = useSharedValue(0);
  const translateX = useSharedValue(0);
  const { shouldCloseCards } = useAppSelector(state => state.dashboard);

  useEffect(() => {
    if (shouldCloseCards) {
      ref.current?.scrollTo({
        x: 0,
        y: 0,
        animated: true,
      });
      progress.value = withTiming(0);
      dispatch(setShouldCloseCards(false));
    }
  }, [shouldCloseCards, dispatch, progress, translateX]);

  const onCardPress = (index: number) => {
    if (!index) {
      return;
    }
    ref.current?.scrollTo({
      x: index * (CARD_WIDTH - 15) + index,
      y: 0,
      animated: true,
    });
    progress.value = withTiming(1);
    anim.value = withTiming(1);
  };

  const onSpacePress = () => {
    ref.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
    progress.value = withTiming(0);
    anim.value = withTiming(0);
  };

  const scrollViewWrapper = useAnimatedStyle(() => {
    const height = interpolate(progress.value, [0, 0.1], [180, 260], Extrapolation.CLAMP);
    return {
      height,
    };
  });

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
    progress.value = interpolate(event.contentOffset.x, [0, 250], [0, 1], Extrapolation.CLAMP);
    anim.value = interpolate(event.contentOffset.x, [0, 250], [0, 1], Extrapolation.CLAMP);
  });

  const zIndexCards = useAnimatedStyle(() => ({
    zIndex: zIndex.value,
  }));

  const zIndexOverlay = useAnimatedStyle(() => ({
    zIndex: zIndex.value / 2,
  }));

  const overlayColor = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      translateY.value,
      [0, 20],
      [Colors.dashboardBackground, Colors.overlay],
    ),
  }));

  return (
    <>
      <Animated.View style={[styles.container, zIndexCards]}>
        <Pressable style={styles.scrollViewWrapper} onPress={onSpacePress}>
          <Animated.ScrollView
            ref={ref}
            horizontal
            bounces={false}
            pagingEnabled
            decelerationRate="fast"
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            snapToInterval={CARD_WIDTH - 24 + 10}
            style={[scrollViewWrapper]}
            disableIntervalMomentum={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.content, { width: data.length * CARD_WIDTH }]}
          >
            {data.map((card, index) => (
              <Card
                key={index}
                item={card}
                index={index}
                zIndex={zIndex}
                progress={progress}
                translateX={translateX}
                onCardPress={() => onCardPress(index)}
              />
            ))}
          </Animated.ScrollView>
        </Pressable>
        <ActionButtons progress={progress} onSpacePress={onSpacePress}>
          <Indicator data={data} translateX={translateX} />
        </ActionButtons>
        <AvailableBalance progress={progress} />
      </Animated.View>
      <Animated.View style={[styles.overlay, overlayColor, zIndexOverlay]} />
    </>
  );
};
