import React from 'react';
import './P.css';

const P = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  return <p className='p--p'>{children}</p>;
};

export default P;
