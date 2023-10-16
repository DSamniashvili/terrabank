import React, { FC } from 'react';
import { View, Text } from 'react-native';
import PinKeyboard from 'components/PinKeyboard/PinKeyboard';
import { PinLine } from 'components/PinLine/PinLine';
import { useTranslation } from 'react-i18next';
import { PasscodeInputProps } from './PasscodeInput.types';
import { useStyleTheme } from './PasscodeInput.styles';
import { PasscodeLogo } from 'assets/SVGs';

export const PasscodeInput: FC<PasscodeInputProps> = ({
  onPasscodeChange,
  valueLength,
  title,
  label,
}) => {
  const { t } = useTranslation();
  const styles = useStyleTheme();
  return (
    <View style={styles.container}>
      <PasscodeLogo />
      <View style={styles.innerTopContainer}>
        <Text style={styles.title}>{t(title)}</Text>
        <Text style={styles.label}>{t(label)}</Text>
        <PinLine fillNumber={valueLength} />
      </View>
      <View
        style={{
          alignItems: 'center',
          width: '80%',
          justifyContent: 'flex-end',
          marginTop: 70,
        }}
      >
        <PinKeyboard onPress={onPasscodeChange} withoutFingerprint />
      </View>
    </View>
  );
};
