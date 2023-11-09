export interface CardsAndAccountsProps {
  accounts: any[];
  showTitle?: boolean;
  showFooter?: boolean;
  showDivider?: boolean;
}

export interface AccountProps {
  item: any;
  isLast: boolean;
  handlePress?: () => void;
}

export interface HeaderProps {
  amount: number;
  showTitle: boolean;
}
