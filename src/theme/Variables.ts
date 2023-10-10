/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from 'types/declarations/theme';

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  successToastColor: '#E9F6EB',
  successToastTextColor: '#43B64B',
  gray200: 'rgba(161, 161, 161, 0.2)',
  textBlack: 'rgba(28, 28, 28, 0.98)',
  textBlack500: 'rgba(29, 29, 29, 0.64)',
  textBlack400: 'rgba(29, 29, 29, 0.4)',
  textWhite: 'rgba(253, 253, 253, 0.98)',
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  primary: '#A0226D',
  textPrimary: '#A0226D',
  secondary: '#9F1D6B0F',
  inactiveTint: '#777C8B',
  success: 'rgba(67, 182, 75, 1)',
  success100: 'rgba(67, 182, 75, 0.1)',
  error: 'rgba(226, 45, 32, 1)',
  error100: 'rgba(226, 45, 32, 0.1)',
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  inputBlack50: 'rgba(29, 29, 29, 0.05)',
  textWhite400: 'rgba(253, 253, 253, 0.4)',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#EFEFEF',
  card: '#EFEFEF',
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 12,
  small: 14,
  regular: 16,
  large: 24,
};

export const Spacing = {
  zero: 0,
  xxs: 2,
  xs: 4,
  s: 8,
  m: 12,
  ml: 16,
  l: 18,
  lg: 20,
  xl: 24,
  xxl: 36,
};

export const BorderRadius = {
  full: 100,
};

export const Opacity = {
  zero: 0,
  one: 1,
  pointOne: 0.1,
  pointTwo: 0.2,
  pointThree: 0.3,
  pointFour: 0.4,
  half: 0.5,
  pointSix: 0.6,
  pointSeven: 0.7,
  pointEight: 0.8,
  pointNine: 0.9,
};

/**
 * Metrics Sizes
 */
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  Spacing,
  BorderRadius,
  Opacity,
  MetricsSizes,
};
