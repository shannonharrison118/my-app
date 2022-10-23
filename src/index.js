import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import kawakubo from './pages/designers/kawakubo';
import theyskens from './pages/designers/theyskens';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  //document.getElementById('root')
); 