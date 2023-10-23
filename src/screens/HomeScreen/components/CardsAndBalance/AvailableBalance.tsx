import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Text } from 'components';
import { useTheme } from 'hooks';
import { Dots, Eye, EyeSlash, Tera } from 'assets/SVGs';
import useStyles from './styles';

const BALANCE = 1024850;

export interface AvailableBalanceProps {
  progress: SharedValue<number>;
}

const AvailableBalance: FC<AvailableBalanceProps> = ({ progress }) => {
  const { Colors } = useTheme();
  const styles = useStyles();
  const balanceScale = useSharedValue(0);

  const balanceStyle = useAnimatedStyle(() => {
    const opacity = interpolate(balanceScale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });

  const dotsStyle = useAnimatedStyle(() => {
    const opacity = interpolate(balanceScale.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });

  const animStyleBalance = useAnimatedStyle(() => {
    const transX = interpolate(progress.value, [0, 1], [0, -250]);
    return {
      marginLeft: transX,
    };
  });

  const onPressHandler = () => {
    if (balanceScale.value) {
      balanceScale.value = withTiming(0);
    } else {
      balanceScale.value = withTiming(1);
    }
  };

  return (
    <Animated.View style={[styles.balanceContainer, animStyleBalance]}>
      <View style={styles.availableBalance}>
        <Text size={14} color={Colors.inactiveTint}>
          ხელმისაწვდომი ნაშთი
        </Text>
        <Pressable onPress={onPressHandler}>
          <Animated.View style={[styles.iconContainer, dotsStyle]}>
            <Eye />
          </Animated.View>
          <Animated.View style={[styles.iconContainer, styles.closeEye, balanceStyle]}>
            <EyeSlash />
          </Animated.View>
        </Pressable>
      </View>
      <Animated.View style={[styles.balance, balanceStyle]}>
        <Text size={28} lineHeight={36}>
          $
          {BALANCE.toLocaleString('en-US', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </Text>
      </Animated.View>
      <Animated.View style={[styles.dots, dotsStyle]}>
        <Dots />
      </Animated.View>
      <Pressable onPress={() => {}}>
        <View style={styles.terabytes}>
          <Tera />
          <Text label special children="24 ტერაბაიტი" />
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default AvailableBalance;
