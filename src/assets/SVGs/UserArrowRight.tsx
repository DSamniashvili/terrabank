import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const UserArrowRight = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#A0226D"
      fillRule="evenodd"
      d="M9 3.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM4.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM6 15.75A3.25 3.25 0 0 0 2.75 19c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25A3.25 3.25 0 0 0 12 15.75H6ZM1.25 19A4.75 4.75 0 0 1 6 14.25h6A4.75 4.75 0 0 1 16.75 19 2.75 2.75 0 0 1 14 21.75H4A2.75 2.75 0 0 1 1.25 19ZM20.53 6.47a.75.75 0 1 0-1.06 1.06l1.72 1.72H17a.75.75 0 0 0 0 1.5h4.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3Z"
      clipRule="evenodd"
    />
  </Svg>
);
