import React from 'react';
import { View } from 'react-native';

type FlexProps = {
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end';
  align?: 'flex-start' | 'center' | 'flex-end';
  children: React.ReactNode;
  style?: object;
};

const Flex = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'flex-start',
  style = {},
  children,
}: FlexProps) => {
  const flexStyles = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    ...style, // Merge with additional styles provided via props
  };

  return <View style={flexStyles}>{children}</View>;
};

//usage:
{
  /* <Flex direction='row' justify='center' align='center'>
    //content here
</Flex> */
}

export default Flex;
