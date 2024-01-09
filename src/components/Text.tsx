import React from 'react';

import {
  Text as MantineText,
  TextProps as MantineTextProps,
} from '@mantine/core';

interface TextProps extends MantineTextProps {
  content: string;
}

const Text: React.FC<TextProps> = ({ content, ...rest }) => {
  return <MantineText {...rest}>{content}</MantineText>;
};

export default Text;
