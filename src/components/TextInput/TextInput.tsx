import React, { forwardRef, useState } from 'react';
import { View, TextInput as RNTextInput, Text, Pressable } from 'react-native';
import Animated, {
  withTiming,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  Easing,
  Extrapolation,
} from 'react-native-reanimated';
import { TextInputProps } from './TextInput.types';
import { useStyleTheme } from './TextInput.styles';

const HIT_SLOP = { top: 15, bottom: 15 };

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (
    {
      value,
      label,
      onChangeText,
      marginTop,
      secureTextEntry,
      keyboardType,
      editable,
      maxLength,
      autoCorrect,
      labelStyle,
      inputStyle,
      containerStyle,
      iconContainerStyle,
    },
    ref,
  ) => {
    const styles = useStyleTheme();
    const [secureText, setSecureText] = useState(secureTextEntry);
    const position = useSharedValue(0);

    const handlePress = () => {
      setSecureText(prev => !prev);
    };

    const handleFocus = () => {
      if (!value) {
        position.value = withTiming(1, { easing: Easing.inOut(Easing.ease) });
      }
    };

    const handleBlur = () => {
      if (!value) {
        position.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
      }
    };

    const labelAnimatedStyles = useAnimatedStyle(() => ({
      top: interpolate(position.value, [0, 1], [17, 2], Extrapolation.CLAMP),
      transform: [
        { scale: interpolate(position.value, [0, 1], [1, 0.9], Extrapolation.CLAMP) },
        { translateX: interpolate(position.value, [0, 1], [0, -9], Extrapolation.CLAMP) },
      ],
    }));

    return (
      <View ref={ref} style={[styles.inputContainer, { marginTop }, containerStyle]}>
        <Animated.Text children={label} style={[styles.label, labelStyle, labelAnimatedStyles]} />
        <View style={styles.wrapper}>
          <RNTextInput
            value={value}
            hitSlop={HIT_SLOP}
            editable={editable}
            onBlur={handleBlur}
            onFocus={handleFocus}
            maxLength={maxLength}
            autoCorrect={autoCorrect}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            secureTextEntry={secureText}
            style={[styles.input, inputStyle]}
          />
          {secureTextEntry && value && (
            <Pressable onPress={handlePress} style={[styles.iconContainer, iconContainerStyle]}>
              <Text children={secureText ? 'show' : 'hide'} />
            </Pressable>
          )}
        </View>
      </View>
    );
  },
);
