import { SvgProps } from 'react-native-svg';

export type SubContentProps = {
  navigateTo?: string;
  title: string;
  icon: (props: SvgProps) => React.JSX.Element;
};

export type SettingsConfigType = {
  title: string;
  subContent: SubContentProps[];
};
