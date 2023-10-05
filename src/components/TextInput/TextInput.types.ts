import { KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native';

export type TextInputProps = {
  value: string;
  label: string;
  marginTop?: number;
  editable?: boolean;
  maxLength?: number;
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
  iconContainerStyle?: StyleProp<TextStyle>;
  onChangeText: (value: string) => void;
};
