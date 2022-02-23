import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './organisms/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='app--div'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
