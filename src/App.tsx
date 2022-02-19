import { ConstructionSign } from '@onetoo-dot-us/react-library';
import { useContext } from 'react';
import './App.css';
import { pagesMapping, RouterContext } from './contexts/Router';
import Home from './pages/Home/Home';
import Repositories from './pages/Repositories/Repositories';
import Header from './organisms/Header/Header';
import Project from './pages/Project/Project';

function App() {
  const { page } = useContext(RouterContext);

  return (
    <>
      <ConstructionSign />
      <Header />
      {pagesMapping.home === page && <Home />}
      {pagesMapping.repositories === page && <Repositories />}{' '}
      {pagesMapping.repositories === page && <Project />}
    </>
  );
}

export default App;
