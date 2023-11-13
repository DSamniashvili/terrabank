import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Edit = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path
      fill="#1C1C1C"
      fillOpacity={0.98}
      fillRule="evenodd"
      d="M18.261 3.739a1.194 1.194 0 0 0-1.689 0l-.264.263a1.682 1.682 0 0 0 1.69 1.69l.263-.264a1.195 1.195 0 0 0 0-1.69ZM16.748 6.94a3.207 3.207 0 0 1-1.689-1.69l-1.962 1.962c-.807.807-1.107 1.117-1.313 1.48-.206.365-.317.782-.594 1.889l-.076.304.304-.076c1.107-.277 1.524-.388 1.888-.594.364-.206.674-.507 1.48-1.313l1.962-1.962Zm-1.237-4.263a2.695 2.695 0 0 1 3.811 3.81l-3.475 3.475-.073.074c-.708.708-1.166 1.166-1.729 1.484-.563.32-1.19.476-2.162.719l-.1.025-1.518.38a.75.75 0 0 1-.91-.91l.38-1.517.025-.101c.243-.972.4-1.6.718-2.162.32-.563.777-1.02 1.485-1.729l.074-.073 3.474-3.475ZM10.694 2H11a.75.75 0 0 1 0 1.5h-.25c-1.907 0-3.261.001-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.027-.14 2.382-.14 4.289v.5c0 1.907.002 3.261.14 4.289.135 1.006.389 1.586.812 2.009.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h.5c1.907 0 3.261-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.028.14-2.382.14-4.29V11a.75.75 0 0 1 1.5 0v.307c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H10.694c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87C2 14.599 2 13.144 2 11.306V10.694C2 8.855 2 7.4 2.153 6.26c.158-1.173.49-2.122 1.238-2.87.749-.748 1.698-1.08 2.87-1.238C7.401 2 8.856 2 10.694 2Z"
      clipRule="evenodd"
    />
  </Svg>
);