import React, { useContext } from 'react';
import { RoutingContext, pagesMapping } from '../../contexts/Routing';

/**
 * Home page that uses GitHub's Overview page as a framework for a collection of biographical and project information.
 *
 * @returns Home component
 */
const Home = () => {
  const { setPage } = useContext(RoutingContext);

  /**
   * Update page and url.
   */
  const onClick = () => {
    setPage(pagesMapping.repositories);
    updateUrl();
  };

  const updateUrl = () => {
    window.location.assign(
      `${window.location.href}${pagesMapping.repositories}`
    );
  };

  return (
    <>
      <div>Kumusta nagtaud taeng!</div>
      <button onClick={onClick}>Navigate to repositories</button>
    </>
  );
};

export default Home;
