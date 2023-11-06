import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ArrowRight = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#A0226D"
      d="M13.233 16.457a.75.75 0 1 0 1.034 1.086l-1.034-1.086Zm6.284-3.914a.75.75 0 1 0-1.034-1.086l1.034 1.086Zm-1.034 0a.75.75 0 1 0 1.034-1.086l-1.034 1.086Zm-4.216-6.086a.75.75 0 1 0-1.034 1.086l1.034-1.086ZM19 12.75a.75.75 0 0 0 0-1.5v1.5Zm-14-1.5a.75.75 0 0 0 0 1.5v-1.5Zm9.267 6.293 5.25-5-1.034-1.086-5.25 5 1.034 1.086Zm5.25-6.086-5.25-5-1.034 1.086 5.25 5 1.034-1.086ZM19 11.25H5v1.5h14v-1.5Z"
    />
  </Svg>
);
