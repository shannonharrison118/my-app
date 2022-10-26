import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import kawakubo from './pages/designers/kawakubo';
import theyskens from './pages/designers/theyskens';
import tai from './pages/designers/tai';
import margiela from './pages/designers/margiela';
import knowles from './pages/designers/knowles';
import fanning from './pages/designers/fanning';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="kawakubo" element={<kawakubo />} />
        <Route path="theyskens" element={<theyskens />} />
        <Route path="tai" element={<tai />} />
        <Route path="margiela" element={<margiela />} />
        <Route path="knowles" element={<knowles />} />
        <Route path="fanning" element={<fanning />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  //document.getElementById('root')
); 