import React from 'react';
import './Landing.css';
import invite from '../imgs/landing_invite.jpg';
import { Link } from 'react-router-dom';
import Home from './Home';

//landing page
const Landing = () => {
  return (
    <div className="App">
      <img src={invite} className="landing" alt="invite" />
      <Link to="/home" component={Home}><button className="button" class="landing-button">~~~~~~~~~~~~~~~~~~</button></Link>
    </div>
  );
}

export default Landing;