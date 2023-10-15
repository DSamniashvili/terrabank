import React, { FC } from 'react';
import { View } from 'react-native';
import { NumericKey } from 'components/NumericKey/NumericKey';
import { DeleteKey } from 'components/DeleteKey/DeleteKey';
import { FingerPrintKey } from 'components/FingerPrintKey/FingerPrintKey';
import { PinKeyboardProps } from './PinKeyboard.types';
import { useStyleTheme } from './PinKeyboard.styles';

const PinKeyboard: FC<PinKeyboardProps> = ({ onPress }) => {
  //withoutFingerprint = false
  const numericKeyRows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const styles = useStyleTheme();

  return (
    <View>
      {numericKeyRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.pinRow}>
          {row.map((number, index) => (
            <NumericKey key={index} onPress={() => onPress(number)} pinNumber={number} />
          ))}
        </View>
      ))}
      <View style={[styles.pinRow, styles.lastRow]}>
        <FingerPrintKey onPress={() => onPress('fingerprint')} />
        <NumericKey onPress={() => onPress(0)} pinNumber={0} />
        <DeleteKey onPress={() => onPress('delete')} />
      </View>
    </View>
  );
};

export default PinKeyboard;
