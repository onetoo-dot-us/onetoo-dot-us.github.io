import React, { useState } from 'react';

interface NavProps {
  showsSmallNav: boolean;
  smallNav: React.ReactNode;
  toggleShowsSmallNav: () => void;
}

export default function Nav({
  showsSmallNav,
  smallNav,
  toggleShowsSmallNav,
}: NavProps) {
  return (
    <nav>
      <ul>
        <li>
          <span onClick={toggleShowsSmallNav}>Content</span>
          {showsSmallNav && smallNav}
        </li>
      </ul>
    </nav>
  );
}
