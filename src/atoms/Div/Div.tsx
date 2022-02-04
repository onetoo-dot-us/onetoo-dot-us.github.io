import React from 'react';

const Div = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className='div--div'>{children}</div>;
};

export default Div;
