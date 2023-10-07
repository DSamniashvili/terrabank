import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  withDelay,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import styles from './Toast.styles';
import { WithTimingConfig } from 'react-native-reanimated';

interface ToastProps {
  errorMessage?: string;
  type?: 'error' | 'success' | 'warning' | 'default';
}

export interface ToastRef {
  start: (errorMessage: string, type?: 'error' | 'success' | 'warning' | 'default') => void;
  stop: () => void;
}

const typeToBackgroundStyle = {
  error: {
    backgroundColor: 'red',
    icon: 'ERROR_ICON',
  },
  success: {
    backgroundColor: 'green',
    icon: 'SUCCESS_ICON',
  },
  warning: {
    backgroundColor: 'yellow',
    icon: 'WARNING_ICON',
  },
  default: {
    backgroundColor: 'gray',
    icon: 'DEFAULT_ICON',
  },
};

const Toast = forwardRef<ToastRef, ToastProps>((props, ref) => {
  const Yposition = useSharedValue(-75);
  const delay = useSharedValue(4000);
  const [toast, setToast] = useState<string>('');
  const s = styles();
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setStatusBarHeight(insets.top);
  }, [insets]);

  useImperativeHandle(ref, () => ({
    start: (errorMessage: string, type?: 'error' | 'success' | 'warning' | 'default') => {
      setToast(errorMessage);

      const timingConfig: WithTimingConfig = {
        duration: 200,
      };
      Yposition.value = withSequence(
        withTiming(statusBarHeight + 75, timingConfig),
        withDelay(delay.value, withTiming(-75, timingConfig)),
      );

      const backgroundStyle = typeToBackgroundStyle[type || 'default'];
      setBackgroundStyle(backgroundStyle);
    },
    stop: () => {
      setToast('');
      const timingConfig: WithTimingConfig = {
        duration: 200,
      };
      Yposition.value = withTiming(-75, timingConfig);
    },
  }));

  const [backgroundStyle, setBackgroundStyle] = useState<{
    backgroundColor: string;
    icon: string;
  }>({
    backgroundColor: 'gray',
    icon: 'DEFAULT_ICON',
  });

  const toastStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: Yposition.value }],
    backgroundColor: backgroundStyle.backgroundColor,
  }));

  const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: () => {
      Yposition.value = statusBarHeight + 75;
    },
    onActive: e => {
      const timingConfig: WithTimingConfig = {
        duration: 200,
      };
      if (e.translationY <= -3) {
        Yposition.value = withTiming(-75, timingConfig);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureHandler}>
      <Animated.View style={[toastStyle, s.container]}>
        {/* <Image source={backgroundStyle.icon} /> */}
        <Text>{toast}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
});

export default Toast;
