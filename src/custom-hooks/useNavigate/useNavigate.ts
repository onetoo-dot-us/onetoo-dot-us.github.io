import { useContext } from 'react';
import { RouterContext } from '../../contexts/Router';

const useNavigate = () => {
  const { setPage } = useContext(RouterContext);

  const navigateTo = (destination: string) => {
    setPage(destination);
    window.history.pushState({}, '', destination);
  };

  return { navigateTo };
};

export default useNavigate;
