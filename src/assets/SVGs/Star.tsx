import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Star = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      fill="#1C1C1C"
      fillOpacity={0.98}
      fillRule="evenodd"
      d="M7 .646c.198 0 .378.111.467.288l1.63 3.262 3.239.54a.522.522 0 0 1 .283.884l-2.42 2.42.81 3.51a.522.522 0 0 1-.742.584L7 10.5l-3.267 1.633a.522.522 0 0 1-.741-.584l.81-3.51-2.42-2.42a.522.522 0 0 1 .282-.884l3.238-.54L6.533.934A.522.522 0 0 1 7 .646Zm0 1.688L5.717 4.9a.522.522 0 0 1-.381.28l-2.5.418 1.908 1.908c.127.127.18.31.14.486l-.627 2.712 2.51-1.254a.522.522 0 0 1 .466 0l2.51 1.254-.626-2.712a.522.522 0 0 1 .14-.486l1.907-1.908-2.5-.417a.522.522 0 0 1-.38-.281L7 2.334Z"
      clipRule="evenodd"
    />
  </Svg>
);
