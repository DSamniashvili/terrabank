import { SvgProps } from 'react-native-svg';

export type AuthorizationMethodType = {
  methodName: string;
  title: string;
  description: string;
  icon: (props: SvgProps) => React.JSX.Element;
};
