import React from 'react';
import './App.css';
import invite from './imgs/landing_invite.jpg';
import Home from './pages/Home';
import { Link } from 'react-router-dom';


console.log(invite);

//landing page
const App = () => {
  return (
    <div className="App">
      
      <Link to="/home" component={Home}><img src={invite} className="landing" alt="invite" /></Link>
    </div>
  );
}

export default App;