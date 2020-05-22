import React from 'react';
import DotLoader from 'react-spinners/DotLoader';

interface Props {
  size: number;
  color: string;
}

const Loader: React.FC<Props> = ({ size, color }) => {
  return <DotLoader size={size} color={color} />;
};

export default Loader;
