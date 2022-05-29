import React, { useState } from 'react';

interface NavProps {
  smallNav: React.ReactNode;
}

export default function Nav({ smallNav }: NavProps) {
  const [showsSmallNav, setShowsSmallNav] = useState(false);

  function handleClick() {
    setShowsSmallNav(!showsSmallNav);
  }

  return (
    <nav>
      <ul>
        <li>
          <span onClick={handleClick}>Consume</span>
          {showsSmallNav && smallNav}
        </li>
      </ul>
    </nav>
  );
}
