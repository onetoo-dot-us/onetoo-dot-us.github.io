import React from 'react';

interface ILinkProps {
  className?: string;
  href: string;
  children: React.ReactNode | React.ReactNode[];
}

const Link = ({ className, href, children }: ILinkProps) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
