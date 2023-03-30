import React from 'react';

interface TextProps {
  text: string;
}

const Text = ({ text }: TextProps): JSX.Element => {
  return <div>{text}</div>;
};

export default Text;
