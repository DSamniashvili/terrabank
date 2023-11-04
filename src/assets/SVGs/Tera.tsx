import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Tera = (props: SvgProps) => (
  <Svg width={15} height={14} fill="none" {...props}>
    <Path
      fill="#A0226D"
      d="M.325 1.106S.834 5.557 3.46 8.02c3.007 2.816 6.558.254 8.13-1.999.627-.89 1.29-2.062 1.308-2.915.018-.854-.572-1.345-1.626-1.354-1.054-.009-2.107.345-2.107.345S9.99.924 11.698.597c1.235-.236 2.162.182 2.77.981.863 1.145.654 3.27-.472 5.714-1.38 2.998-5.496 7.649-9.783 5.723C.089 11.162-.511 4.667.325 1.106Z"
    />
    <Path
      fill="#44B44A"
      d="M9.164 5.929A7.049 7.049 0 0 1 1.26.897a7.049 7.049 0 0 1 7.903 5.032Z"
    />
  </Svg>
);