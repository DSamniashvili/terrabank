import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import {
  HOME,
  INITIAL,
  ONBOARDING_SCREEN,
  PASSCODE_LOGIN_SCREEN,
  PASSWORD_LOGIN_SCREEN,
  PAYMENTS,
  PRODUCTS,
  PROFILE,
  TRANSACTIONS,
} from './ScreenNames';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeStackParamsList = {
  HomeScreen: undefined;
};

type ProductsStackParamsList = {
  ProductsScreen: undefined;
};

type TransactionsStackParamsList = {
  TransactionsScreen: undefined;
};

type PaymentsStackParamsList = {
  TransactionsScreen: undefined;
};

type ProfileStackParamsList = {
  ProfileScreen: undefined;
};

export type GuestStackParamList = {
  [ONBOARDING_SCREEN]: undefined;
  [PASSWORD_LOGIN_SCREEN]: undefined;
  [PASSCODE_LOGIN_SCREEN]: undefined;
};

export type MainStackParamsList = {
  [INITIAL]: undefined;
};

export type TabParamList = {
  [HOME]: NavigatorScreenParams<HomeStackParamsList>;
  [PRODUCTS]: NavigatorScreenParams<ProductsStackParamsList>;
  [TRANSACTIONS]: NavigatorScreenParams<TransactionsStackParamsList>;
  [PAYMENTS]: NavigatorScreenParams<PaymentsStackParamsList>;
  [PROFILE]: NavigatorScreenParams<ProfileStackParamsList>;
};

// Home stack intellisense
export type HomeStackScreenProps<T extends keyof HomeStackParamsList> = StackNavigationProp<
  HomeStackParamsList,
  T
>;

export type HomeStackRouteProps<T extends keyof HomeStackParamsList> = RouteProp<
  HomeStackParamsList,
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
