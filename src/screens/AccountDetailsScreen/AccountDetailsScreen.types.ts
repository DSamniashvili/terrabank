export interface CardItemProps {
  item: any;
  isLast: boolean;
  onPress?: () => void;
}

export interface BadgeProps {
  icon: React.ReactNode;
  label: string;
}

export interface DetailsItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  onPress: () => void;
}

export interface CardSliderItemProps {
  item: any;
}
