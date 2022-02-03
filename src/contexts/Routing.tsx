import React, { useState, useMemo, createContext, SetStateAction } from 'react';

/**
 * Simple object used to set and identify pages in router.
 */
export const pagesMapping = {
  home: '/',
  repositories: 'repositories',
};

export const RoutingContext = createContext({
  page: pagesMapping.home,
  setPage: (page: string): any => page,
});

interface IRouterProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Custom solution for routing in React.
 * @param props.children
 * @returns `RoutingContext.Provider`
 */
const Router = ({ children }: IRouterProps) => {
  /**
   * Read url path, e.g. `/about` or `/`
   */
  let urlPath = window.location.pathname.slice(1).toLowerCase();

  /**
   * Set default page to Home if not specified.
   */
  const [page, setPage] = useState<string>(urlPath || pagesMapping.home);

  /**
   * Listen for changes to state.
   */
  const value = useMemo(() => ({ page, setPage }), [page, setPage]);

  return (
    <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>
  );
};

export default Router;
