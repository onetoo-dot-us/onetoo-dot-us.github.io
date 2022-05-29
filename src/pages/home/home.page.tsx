import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../../components/nav/nav.component';

export default function HomePage() {
  const [showsSmallNav, setShowsSmallNav] = useState(false);

  const smallNav = (
    <ul>
      <li>
        <Link to='listen' onClick={toggleShowsSmallNav}>
          Audio
        </Link>
      </li>
      <li>Text</li>
      <li>Video</li>
    </ul>
  );

  function toggleShowsSmallNav() {
    setShowsSmallNav(!showsSmallNav);
  }

  return (
    <>
      This is the home page.
      <Nav
        showsSmallNav={showsSmallNav}
        smallNav={smallNav}
        toggleShowsSmallNav={toggleShowsSmallNav}
      />
      <main>
        <Outlet />
      </main>
    </>
  );
}
