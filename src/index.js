import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/PP Neue Montreal/PPNeueMontreal-Regular.ttf';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import Kawakubo from './pages/designers/kawakubo.js';
import Theyskens from './pages/designers/theyskens.js';
import Tai from './pages/designers/tai.js';
import Margiela from './pages/designers/margiela.js';
import Knowles from './pages/designers/knowles.js';
import Fanning from './pages/designers/fanning.js';
import KawBookshelf from './pages/bookshelves/kawakubo-bookshelf.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/kawakubo" element={<Kawakubo />} />
        <Route path="/kawakubo/bookshelf" element={<KawBookshelf />} />
        <Route path="theyskens" element={<Theyskens />} />
        <Route path="tai" element={<Tai />} />
        <Route path="margiela" element={<Margiela />} />
        <Route path="knowles" element={<Knowles />} />
        <Route path="fanning" element={<Fanning />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  //document.getElementById('root')
); 