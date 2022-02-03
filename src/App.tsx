import { ConstructionSign } from '@onetoo-dot-us/react-library';
import { useContext } from 'react';
import './App.css';
import { pagesMapping, RoutingContext } from './contexts/Routing';
import Home from './pages/Home/Home';
import Repositories from './pages/Repositories/Repositories';
import Header from './organisms/Header/Header';

function App() {
  const { page } = useContext(RoutingContext);

  return (
    <>
      <ConstructionSign />
      <Header />
      {pagesMapping.home === page && <Home />}
      {pagesMapping.repositories === page && <Repositories />}{' '}
    </>
  );
}

export default App;
