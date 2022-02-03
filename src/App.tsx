import { useContext } from 'react';
import './App.css';
import { pagesMapping, RoutingContext } from './contexts/Routing';
import Home from './pages/Home/Home';
import Repositories from './pages/Repositories/Repositories';

function App() {
  const { page } = useContext(RoutingContext);

  return (
    <>
      {pagesMapping.home === page && <Home />}
      {pagesMapping.repositories === page && <Repositories />}{' '}
    </>
  );
}

export default App;
