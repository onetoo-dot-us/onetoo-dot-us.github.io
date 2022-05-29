import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AudioList from './features/stream-audio/audio-list/audio-list';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='listen' element={<AudioList />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
