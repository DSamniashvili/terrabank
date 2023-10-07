import { ButtonProps, ButtonType } from './Button.types';
import { withButton } from './HOC/withButton.hoc';

export const Button: {
  [key in ButtonType]: React.FC<ButtonProps>;
} = {
  Primary: withButton('Primary'),
  Secondary: withButton('Secondary'),
  Destructive: withButton('Destructive'),
  Text: withButton('Text'),
};
