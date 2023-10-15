import React, { FC } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { FingerPrintKeyProps } from './FingerPrintKey.types';
import { useStyleTheme } from './FingerPrintKey.styles';
import { FingerPrintIcon } from 'assets/SVGs';
import { FaceIdSvg } from 'assets/SVGs';
export const FingerPrintKey: FC<FingerPrintKeyProps> = ({ onPress, show }) => {
  //show must be !show
  const styles = useStyleTheme();
  return (
    <TouchableOpacity
      style={[styles.pinItem, styles.firstPinItem, show && styles.hide]}
      onPress={() => onPress(10)}
    >
      {Platform.OS === 'android' ? <FingerPrintIcon /> : <FaceIdSvg />}
    </TouchableOpacity>
  );
};
