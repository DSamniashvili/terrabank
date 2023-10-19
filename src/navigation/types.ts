import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import {
  AUTHORIZATION_METHODS_SCREEN,
  CREATE_PASSCODE_SCREEN,
  HOME_SCREEN,
  ONBOARDING_SCREEN,
  PASSCODE_LOGIN_SCREEN,
  PASSWORD_LOGIN_SCREEN,
  PAYMENTS_STACK,
  PRODUCTS_STACK,
  PRODUCTS_SCREEN,
  PROFILE_SCREEN,
  PROFILE_STACK,
  SETTINGS_SCREEN,
  SETTINGS_STACK,
  TRANSACTIONS_SCREEN,
  TRANSACTIONS_STACK,
  HOME_STACK,
  INITIAL_STACK,
} from './ScreenNames';
import { StackNavigationProp } from '@react-navigation/stack';

type DashboardStackParamsList = {
  [HOME_SCREEN]: undefined;
};

type ProductsStackParamsList = {
  [PRODUCTS_SCREEN]: undefined;
};

type TransactionsStackParamsList = {
  [TRANSACTIONS_SCREEN]: undefined;
};

type PaymentsStackParamsList = {};

export type SettingsStackParamsList = {
  [SETTINGS_SCREEN]: undefined;
  [AUTHORIZATION_METHODS_SCREEN]: undefined;
};

export type ProfileStackParamsList = {
  [PROFILE_SCREEN]: undefined;
  [SETTINGS_STACK]: NavigatorScreenParams<SettingsStackParamsList>;
  [CREATE_PASSCODE_SCREEN]: undefined;
};

export type GuestStackParamList = {
  [ONBOARDING_SCREEN]: undefined;
  [PASSWORD_LOGIN_SCREEN]: undefined;
  [PASSCODE_LOGIN_SCREEN]: undefined;
};

export type MainStackParamsList = {
  [INITIAL_STACK]: undefined;
};

export type TabParamList = {
  [HOME_STACK]: NavigatorScreenParams<DashboardStackParamsList>;
  [PRODUCTS_STACK]: NavigatorScreenParams<ProductsStackParamsList>;
  [TRANSACTIONS_STACK]: NavigatorScreenParams<TransactionsStackParamsList>;
  [PAYMENTS_STACK]: NavigatorScreenParams<PaymentsStackParamsList>;
  [PROFILE_STACK]: NavigatorScreenParams<ProfileStackParamsList>;
};

// Home stack intellisense
export type DashboardStackScreenProps<T extends keyof DashboardStackParamsList> =
  StackNavigationProp<DashboardStackParamsList, T>;

export type DashboardStackRouteProps<T extends keyof DashboardStackParamsList> = RouteProp<
  DashboardStackParamsList,
  T
>;

// PRODUCTS stack intellisense
export type ProductsStackScreenProps<T extends keyof ProductsStackParamsList> = StackNavigationProp<
  ProductsStackParamsList,
  T
>;

export type ProductsStackRouteProps<T extends keyof ProductsStackParamsList> = RouteProp<
  ProductsStackParamsList,
  T
>;

// TRANSACTIONS stack intellisense
export type TransactionsStackScreenProps<T extends keyof TransactionsStackParamsList> =
  StackNavigationProp<TransactionsStackParamsList, T>;

export type TransactionsStackRouteProps<T extends keyof TransactionsStackParamsList> = RouteProp<
  TransactionsStackParamsList,
  T
>;

// PAYMENTS stack intellisense
export type PaymentsStackScreenProps<T extends keyof PaymentsStackParamsList> = StackNavigationProp<
  PaymentsStackParamsList,
  T
>;

export type PaymentsStackRouteProps<T extends keyof PaymentsStackParamsList> = RouteProp<
  PaymentsStackParamsList,
  T
>;

// PROFILE stack intellisense
export type ProfileStackScreenProps<T extends keyof ProfileStackParamsList> = StackNavigationProp<
  ProfileStackParamsList,
  T
>;

export type ProfileStackRouteProps<T extends keyof ProfileStackParamsList> = RouteProp<
  ProfileStackParamsList,
  T
>;

// Guest stack intellisense
export type GuestStackScreenProps<T extends keyof GuestStackParamList> = StackNavigationProp<
  GuestStackParamList,
  T
>;

export type GuestStackRouteProps<T extends keyof GuestStackParamList> = RouteProp<
  GuestStackParamList,
  T
>;

// Settings stack intellisense
export type SettingsStackScreenProps<T extends keyof SettingsStackParamsList> = StackNavigationProp<
  SettingsStackParamsList,
  T
>;

export type SettingsStackRouteProps<T extends keyof SettingsStackParamsList> = RouteProp<
  SettingsStackParamsList,
  T
>;
