import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Share = (props: SvgProps) => (
  <Svg width={20} height={22} fill="none" {...props}>
    <Path
      fill="#A0226D"
      stroke="#A0226D"
      strokeWidth={0.2}
      d="M15.847 13.849c-1.15 0-2.176.548-2.832 1.395L7.52 12.175a3.588 3.588 0 0 0-.004-2.363l5.49-3.064a3.57 3.57 0 0 0 2.836 1.403 3.581 3.581 0 0 0 3.576-3.575A3.578 3.578 0 0 0 15.843 1a3.578 3.578 0 0 0-3.576 3.576c0 .415.07.814.204 1.183L6.985 8.824A3.558 3.558 0 0 0 4.149 7.42a3.581 3.581 0 0 0-3.576 3.576 3.576 3.576 0 0 0 6.42 2.168l5.49 3.069a3.559 3.559 0 0 0-.207 1.191A3.58 3.58 0 0 0 15.85 21a3.578 3.578 0 0 0 3.576-3.576 3.582 3.582 0 0 0-3.58-3.575Zm0-11.724c1.354 0 2.454 1.1 2.454 2.455 0 1.354-1.1 2.454-2.454 2.454a2.456 2.456 0 0 1-2.454-2.454 2.46 2.46 0 0 1 2.454-2.455ZM4.153 13.45a2.456 2.456 0 0 1-2.455-2.454c0-1.354 1.1-2.454 2.455-2.454 1.354 0 2.454 1.1 2.454 2.454a2.46 2.46 0 0 1-2.454 2.454Zm11.694 6.425a2.456 2.456 0 0 1-2.454-2.455c0-1.354 1.1-2.454 2.454-2.454s2.454 1.1 2.454 2.454-1.1 2.455-2.454 2.455Z"
    />
  </Svg>
);