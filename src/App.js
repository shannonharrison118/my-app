import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import invite from './imgs/landing_invite.jpg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { Link } from 'react-router-dom';
import kawakubo from './pages/designers/kawakubo';
import theyskens from './pages/designers/theyskens';


console.log(invite);

//landing page
const App = () => {
  return (
    <div className="App">
      <img src={invite} className="landing" alt="invite" />
      <Link to="/home" component={Home}><button className="button">~~~~~~~~~~~~~~~~~~</button></Link>
    </div>
  );
}

export default App;