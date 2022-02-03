import { useContext } from 'react';
import { RoutingContext } from '../../contexts/Routing';

const useNavigate = () => {
  const { setPage } = useContext(RoutingContext);

  const navigateTo = (destination: string) => {
    setPage(destination);
    window.history.pushState({}, '', destination);
  };

  return { navigateTo };
};

export default useNavigate;
