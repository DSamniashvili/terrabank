import { KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export type TextInputProps = {
  value?: string;
  label?: string;
  type?: 'text' | 'checkbox';
  required?: boolean;
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
  onChangeText?: (value: string) => void;
};

export type ControlledInputType<T extends FieldValues> = TextInputProps & UseControllerProps<T>;
