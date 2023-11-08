type Variant = 'deposit' | 'loan';

export interface DepositsProps {
  data: any[];
  variant: Variant;
}

export interface ListItemProps {
  item: any;
  isLast: boolean;
}

export interface HeaderProps {
  variant: Variant;
  amount: number;
}
