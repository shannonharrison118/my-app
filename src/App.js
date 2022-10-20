import React from 'react';
import './App.css';
import invite from './imgs/landing_invite.jpg';
import { Link } from 'react-router-dom';
import Home from './pages/Home';

console.log(invite);

//landing page
const App = () => {
  return (
    <div className="App">
      <img src={invite} className="landing" alt="invite" />
      <Link to="/Home"><button className="landing-enter">~~~~~~~~~~~~~~~~~~</button></Link>
    </div>
  );
}

export default App;