import React, { FC } from 'react';
import Animated, { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import { Text } from '../index';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setScrollToTop } from 'store/slices/Scroll';
import { IHomeHeaderProps } from './HomeHeader.types';
import { useStyles } from './HomeHeader.styles';
import useTheme from 'hooks/useTheme';

export const HomeHeader: FC<IHomeHeaderProps> = ({ translateY }) => {
  const dispatch = useAppDispatch();
  const styles = useStyles();
  const { Colors } = useTheme();

  const onTouch = () => {
    dispatch(setScrollToTop(true));
  };

  const color = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      translateY.value,
      [0, 20],
      [Colors.dashboardBackground, Colors.overlay],
    ),
  }));

  return (
    <Animated.View style={[styles.container, color]} onTouchStart={onTouch}>
      <Text children="navigation.hello" style={styles.text} />
    </Animated.View>
  );
};
