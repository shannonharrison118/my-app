import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import invite from './imgs/landing_invite.jpg';
import { useNavigate } from 'react-router-dom';
import Home from './pages/Home';


console.log(invite);
//landing page
function App() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/Home');
  }

  return (
    <div className="App">
      <img src={invite} className="landing" alt="invite" />
      <button onClick={navigateToHome} className="landing-enter">~~~~~~~~~~~~~~~~~~</button>

      <Routes>
        <Route path="./Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
