import { ImageStyle, StyleProp, TextStyle, ViewStyle, Animated } from 'react-native';

export interface IItem {
  image?: string;
  title?: string;
  desc?: string;
  color: string;
}

export interface CarouselProps {
  data: IItem[];
  gap?: number;
  delay?: number;
  skipable?: boolean;
  controls?: boolean;
  withTimer?: boolean;
  renderItem?: React.ReactNode;
  dotStyle?: StyleProp<ViewStyle>;
  descStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  dotContainerStyle?: StyleProp<ViewStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  skipButtonContainerStyle?: StyleProp<ViewStyle>;
  onSkip?: () => void;
  onTimeout?: () => void;
}
export interface IndicatorProps {
  data: IItem[];
  gap?: number;
  activeIndex: number;
  translateX: Animated.Value;
  dotStyle?: StyleProp<ViewStyle>;
  dotContainerStyle?: StyleProp<ViewStyle>;
}
