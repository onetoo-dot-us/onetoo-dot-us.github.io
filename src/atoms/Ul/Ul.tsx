import './Ul.css';
import React from 'react';

const Ul = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <ul className='ul--ul'>{children}</ul>;
};

export default Ul;
