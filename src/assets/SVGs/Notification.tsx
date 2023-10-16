import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Notification = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 .918a6.849 6.849 0 00-6.716 5.506l-1.045 5.224a3.792 3.792 0 002.183 4.195c.556.247 1.125.455 1.704.624l.063.142a4.17 4.17 0 007.62 0l.063-.142c.58-.169 1.15-.377 1.706-.624a3.792 3.792 0 002.183-4.195l-1.045-5.224A6.849 6.849 0 0010 .918zm3.213 14.176a.756.756 0 00-.14.038 12.377 12.377 0 01-6.15-.002.746.746 0 00-.134-.035 12.057 12.057 0 01-1.758-.623 2.292 2.292 0 01-1.321-2.53l1.045-5.224a5.349 5.349 0 0110.49 0l1.045 5.224a2.292 2.292 0 01-1.321 2.53c-.57.254-1.158.461-1.756.622zm-4.994 1.81c1.18.153 2.38.153 3.56 0a2.669 2.669 0 01-3.56 0z"
      fill="#22272F"
    />
  </Svg>
);