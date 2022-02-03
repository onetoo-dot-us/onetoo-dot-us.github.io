import { pagesMapping } from '../../contexts/Routing';
import useNavigate from '../../custom-hooks/useNavigate/useNavigate';

const Repositories = () => {
  const { navigateTo } = useNavigate();

  const onClick = () => {
    navigateTo(pagesMapping.home);
  };

  return (
    <>
      <div>Kumusta nagtaud repositories!</div>
      <button onClick={onClick}>Navigate to home</button>
    </>
  );
};

export default Repositories;
