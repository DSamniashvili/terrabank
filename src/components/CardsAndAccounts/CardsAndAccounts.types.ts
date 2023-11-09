export interface CardsAndAccountsProps {
  accounts: any[];
  showTitle?: boolean;
  showFooter?: boolean;
  showDivider?: boolean;
}

export interface AccountProps {
  item: any;
  isLast: boolean;
}

export interface HeaderProps {
  amount: number;
  showTitle: boolean;
}
