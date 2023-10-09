import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Text, Image } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  withDelay,
  useAnimatedGestureHandler,
  Easing,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import styles from './Toast.styles';
import { WithTimingConfig } from 'react-native-reanimated';
import { useTheme } from 'hooks';

interface ToastProps {
  errorMessage?: string;
  type?: 'error' | 'success' | 'warning' | 'default';
}

type ImagesType = {
  colors: any;
  check: any;
  send: any;
  translate: any;
};

export interface ToastRef {
  start: (errorMessage: string, type?: 'error' | 'success' | 'warning' | 'default') => void;
  stop: () => void;
}

type BackgroundStyle = {
  backgroundColor: string;
  icon: keyof ImagesType;
  textColor: string;
};

const defaultBackgroundStyle: BackgroundStyle = {
  backgroundColor: 'gray',
  icon: 'check',
  textColor: 'white',
};

const Toast = forwardRef<ToastRef, ToastProps>((props, ref) => {
  const { Images } = useTheme();

  const Yposition = useSharedValue(-75);
  const delay = useSharedValue(4000);
  const [toast, setToast] = useState<string>('');
  const s = styles();
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const insets = useSafeAreaInsets();

  const typeToBackgroundStyle: Record<
    'error' | 'success' | 'warning' | 'default',
    BackgroundStyle
  > = {
    error: {
      backgroundColor: 'red',
      icon: 'check',
      textColor: 'white', // Text color for error
    },
    success: {
      backgroundColor: '#E9F6EB',
      icon: 'check',
      textColor: 'green', // Text color for success
    },
    warning: {
      backgroundColor: 'yellow',
      icon: 'check',
      textColor: 'black', // Text color for warning
    },
    default: defaultBackgroundStyle,
  };

  useEffect(() => {
    setStatusBarHeight(insets.top);
  }, [insets]);

  useImperativeHandle(ref, () => ({
    start: (errorMessage: string, type?: 'error' | 'success' | 'warning' | 'default') => {
      setToast(errorMessage);

      const timingConfig: WithTimingConfig = {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
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
        easing: Easing.inOut(Easing.ease),
      };
      Yposition.value = withTiming(-75, timingConfig);
    },
  }));

  const [backgroundStyle, setBackgroundStyle] = useState<BackgroundStyle>(defaultBackgroundStyle);

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
        easing: Easing.inOut(Easing.ease),
      };
      if (e.translationY <= -3) {
        Yposition.value = withTiming(-75, timingConfig);
      }
    },
    onEnd: e => {
      if (e.velocityY > 1000 || Yposition.value > 0) {
        const timingConfig: WithTimingConfig = {
          duration: 200,
          easing: Easing.inOut(Easing.ease),
        };
        Yposition.value = withTiming(-75, timingConfig);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureHandler} onHandlerStateChange={panGestureHandler}>
      <Animated.View style={[toastStyle, s.container]}>
        <Image source={Images.icons[backgroundStyle.icon]} />
        <Text style={[s.toastText, { color: backgroundStyle.textColor }]}>{toast}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
});

export default Toast;
