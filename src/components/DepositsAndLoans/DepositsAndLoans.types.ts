import { DepositType } from 'services/apis/productsAPI/productsAPI.types';

type Variant = 'deposit' | 'loan';

export interface DepositsAndLoansProps {
  data?: DepositType[];
  variant: Variant;
  totalAmount: number;
  seeAll?: boolean;
}

export interface ListItemProps {
  item: DepositType;
  isLast: boolean;
  variant: Variant;
}

export interface HeaderProps {
  variant: Variant;
  quantity: number;
  totalAmount: number;
}
