import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const OpenEye = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#1D1D1D"
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M2.417 10c0-.255.104-.707.397-1.268a6.424 6.424 0 0 1 1.34-1.723C5.373 5.885 7.276 4.917 10 4.917s4.627.968 5.845 2.092a6.423 6.423 0 0 1 1.341 1.723c.293.561.397 1.013.397 1.268 0 .255-.104.707-.397 1.268a6.423 6.423 0 0 1-1.34 1.723c-1.219 1.124-3.122 2.092-5.846 2.092s-4.627-.968-5.846-2.092a6.423 6.423 0 0 1-1.34-1.723c-.293-.561-.397-1.013-.397-1.268ZM10 3.417c-3.109 0-5.373 1.115-6.863 2.49A7.921 7.921 0 0 0 1.483 8.04C1.125 8.727.917 9.422.917 10c0 .578.208 1.273.566 1.961a7.921 7.921 0 0 0 1.654 2.132c1.49 1.375 3.754 2.49 6.863 2.49 3.109 0 5.373-1.115 6.863-2.49a7.92 7.92 0 0 0 1.654-2.132c.358-.688.566-1.383.566-1.961 0-.578-.208-1.273-.566-1.961a7.92 7.92 0 0 0-1.654-2.132c-1.49-1.375-3.754-2.49-6.863-2.49ZM8.25 10a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM10 6.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"
      clipRule="evenodd"
    />
  </Svg>
);