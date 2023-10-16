import { SvgProps } from 'react-native-svg';

export type AuthorizationMethodType = {
  name: string;
  description: string;
  icon: (props: SvgProps) => React.JSX.Element;
};
