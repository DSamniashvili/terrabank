import { Account, Currency } from 'services/apis/productsAPI/productsAPI.types';

export interface CardsAndAccountsProps {
  accounts?: Account[];
  showTitle?: boolean;
  showFooter?: boolean;
  showDivider?: boolean;
  totalAvailableBalance?: number;
  seeAllAccounts?: boolean;
}

export interface AccountProps {
  item: Account;
  isLast: boolean;
  handlePress?: () => void;
}

export interface HeaderProps {
  amount: number;
  showTitle: boolean;
  totalAvailableBalance: number;
}

export type CurrencyMap = {
  cur: Currency;
  sign: string;
};
