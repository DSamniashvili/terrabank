import { ButtonProps, ButtonType } from './Button.types';
import { withButton } from 'components/HOC';

export const Button: {
  [key in ButtonType]: React.FC<ButtonProps>;
} = {
  Primary: withButton('Primary'),
  Secondary: withButton('Secondary'),
  Destructive: withButton('Destructive'),
  Text: withButton('Text'),
};
