import { useContext } from 'react';
import { RoutingContext } from '../../contexts/Routing';
import updateUrl from '../../utils/updateUrl/updateUrl';

const useNavigate = () => {
  const { setPage } = useContext(RoutingContext);

  const navigateTo = (mapping: string) => {
    setPage(mapping);
    updateUrl(mapping);
  };

  return { navigateTo };
};

export default useNavigate;
