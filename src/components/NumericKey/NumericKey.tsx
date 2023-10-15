import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useStyleTheme } from './NumericKey.styles';
import { NUmericKeyProps } from './NumericKey.types';

export const NumericKey: FC<NUmericKeyProps> = ({ onPress, pinNumber, first }) => {
  const styles = useStyleTheme();
  return (
    <TouchableOpacity
      style={[styles.pinItem, first && styles.firstPinItem]}
      onPress={() => onPress(pinNumber)}
    >
      <Text style={styles.pinItemText}>{pinNumber.toString()}</Text>
    </TouchableOpacity>
  );
};
