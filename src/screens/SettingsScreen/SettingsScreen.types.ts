import { SettingsStackParamsList } from 'navigation/types';
import { SvgProps } from 'react-native-svg';

export type SubContentProps = {
  navigateTo: keyof SettingsStackParamsList;
  title: string;
  icon: (props: SvgProps) => React.JSX.Element;
};

export type SettingsConfigType = {
  title: string;
  subContent: SubContentProps[];
};
