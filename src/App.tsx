import { ConstructionSign } from '@onetoo-dot-us/react-library';
import { useContext } from 'react';
import './App.css';
import { pagesMapping, RoutingContext } from './contexts/Routing';
import Home from './pages/Home/Home';
import Repositories from './pages/Repositories/Repositories';

function App() {
  const { page } = useContext(RoutingContext);

  return (
    <>
      {/* {pagesMapping.home === page && <Home />} */}
      {/* {pagesMapping.repositories === page && <Repositories />}{' '} */}
      <ConstructionSign />
      <h1>Onetoo</h1>
    </>
  );
}

export default App;
