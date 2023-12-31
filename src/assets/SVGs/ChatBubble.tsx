import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ChatBubble = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 10A6.75 6.75 0 1110 16.75H3.873c.096-.17.172-.324.228-.47.107-.283.192-.532.23-.806a3.675 3.675 0 000-.84c-.021-.255-.106-.581-.218-.962-.117-.396-.284-.92-.502-1.602l-.004-.01c-.211-.663-.357-1.372-.357-2.06zm-1.5 7.5c0-.158.049-.304.132-.425.542-.813.734-1.111.816-1.327.102-.268.134-.384.148-.483.014-.098.015-.219-.01-.504-.006-.083-.046-.27-.162-.666-.111-.377-.273-.885-.495-1.58-.243-.757-.429-1.626-.429-2.515A8.25 8.25 0 1110 18.25H2.5a.75.75 0 01-.75-.75zm4.917-6.667a.833.833 0 100-1.666.833.833 0 000 1.666zM10.833 10a.833.833 0 11-1.666 0 .833.833 0 011.666 0zm2.5.833a.833.833 0 100-1.666.833.833 0 000 1.666z"
      fill="#22282F"
    />
  </Svg>
);
