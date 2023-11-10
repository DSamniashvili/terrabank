export type Currency = 'GEL' | 'USD' | 'EUR' | 'GBP';

export type Account = {
  accountId: number;
  accountIban: string;
  accountType: number;
  accountNumber: number;
  ccy: Currency;
  accountName: string;
  accountNameLat: string;
  accountNameCustom: null | string;
  accountStatusId: number;
  isDebit: boolean;
  isCredit: boolean;
  isFavourite: boolean;
  blockedAmount: number;
  availableBalance: number;
  balance: number;
  positionIndex: number;
  cards: null;
};

type ImageType = {
  url: string;
  type: number;
};

export type OfferType = {
  id: number;
  title: string;
  description: string;
  images: ImageType[];
};

export type OffersAPIResponseType = {
  offers: OfferType[];
};
