import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Chat = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 3.25A6.75 6.75 0 003.25 10c0 .688.146 1.397.357 2.06l.004.01c.218.681.385 1.206.502 1.602.112.38.197.707.218.963.026.302.039.564 0 .839a3.675 3.675 0 01-.23.806c-.056.146-.132.3-.228.47H10a6.75 6.75 0 000-13.5zM1.882 17.075A.75.75 0 002.5 18.25H10A8.25 8.25 0 101.75 10c0 .89.186 1.758.429 2.516.222.694.384 1.202.495 1.58.116.394.156.582.163.665.024.285.023.406.009.504-.014.099-.046.215-.148.483-.082.216-.274.514-.816 1.327zm4.035-8.742a.75.75 0 01.75-.75h6.666a.75.75 0 010 1.5H6.667a.75.75 0 01-.75-.75zm.75 2.584a.75.75 0 000 1.5H10a.75.75 0 000-1.5H6.667z"
      fill="#22282F"
    />
  </Svg>
);
