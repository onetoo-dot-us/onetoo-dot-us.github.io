import React from 'react';
import useNavigate from '../../custom-hooks/useNavigate/useNavigate';

interface ILinkProps {
  className?: string;
  href: string;
  children: React.ReactNode | React.ReactNode[];
}

const Link = ({ className, href, children }: ILinkProps) => {
  const { navigateTo } = useNavigate();

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    navigateTo(href);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
