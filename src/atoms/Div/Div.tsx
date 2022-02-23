import React from 'react';
import './Div.css';

interface IDivProps {
  children: React.ReactNode | React.ReactNode[];
  row?: boolean;
  className?: string;
}

const Div = ({ children, row, className }: IDivProps) => {
  return (
    <div
      className={
        row
          ? `div--div__row${className ? ' ' + className : ''}`
          : `div--div${className ? ' ' + className : ''}`
      }
    >
      {children}
    </div>
  );
};

export default Div;
