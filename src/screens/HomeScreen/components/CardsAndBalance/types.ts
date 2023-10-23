import { SharedValue } from 'react-native-reanimated';

export type Item = {
  name: string;
  color: string;
};

export interface CardProps {
  item: Item;
  index: number;
  isLast: boolean;
  onCardPress: () => void;
  onSpacePress: () => void;
  progress: SharedValue<number>;
  translateX: SharedValue<number>;
}

export interface IndicatorProps {
  data: Item[];
  translateX: SharedValue<number>;
}

export interface DotProps {
  index: number;
  translateX: SharedValue<number>;
}
