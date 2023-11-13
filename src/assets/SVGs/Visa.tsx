import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

export const Visa = (props: SvgProps) => (
  <Svg width={42} height={14} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#00579F"
        d="M18.2 13.797h-3.402L16.926.245h3.402L18.2 13.798ZM30.534.577A8.172 8.172 0 0 0 27.482 0c-3.36 0-5.726 1.845-5.74 4.484-.028 1.946 1.694 3.027 2.981 3.676 1.317.663 1.764 1.096 1.764 1.688-.013.907-1.063 1.326-2.043 1.326-1.358 0-2.086-.216-3.192-.72l-.448-.218-.476 3.043c.798.374 2.268.706 3.794.721 3.57 0 5.894-1.817 5.922-4.628.013-1.543-.896-2.725-2.856-3.691-1.19-.62-1.919-1.038-1.919-1.673.014-.577.617-1.167 1.96-1.167a5.638 5.638 0 0 1 2.534.519l.308.143.463-2.926ZM35.056 8.996c.28-.778 1.358-3.791 1.358-3.791-.014.028.28-.793.447-1.298l.238 1.168s.645 3.244.785 3.921h-2.828Zm4.2-8.75h-2.633c-.811 0-1.428.244-1.778 1.124l-5.053 12.427h3.57l.714-2.033h4.368c.097.476.406 2.033.406 2.033H42L39.255.245ZM11.956.245 8.624 9.487 8.26 7.612C7.644 5.45 5.712 3.1 3.556 1.932l3.052 11.851h3.598L15.554.245h-3.598Z"
      />
      <Path
        fill="#FAA61A"
        d="M5.53.245H.056L0 .52c4.27 1.125 7.098 3.835 8.26 7.094L7.07 1.384C6.874.52 6.272.274 5.53.245Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h42v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);