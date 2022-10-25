import React from 'react';
import './Home.css';
import room from '../imgs/3d-room-grid.jpg';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components/Navbar';
import kawakubo from './designers/kawakubo';
import theyskens from './designers/theyskens';
import tai from './designers/tai';
import margiela from './designers/margiela';
import knowles from './designers/knowles';
import fanning from './designers/fanning';

const divStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${room})`,
    backgroundSize: 'cover',
    backgroundRepeat:"no-repeat"
};

const Home = () => {
    return(
        <div class='home' style={divStyle}>
            <Link to="/kawakubo" component={kawakubo}><button className="button" class="button left-button1">REI KAWAKUBO</button></Link>
            <Link to="/kawakubo" component={theyskens}><button className="button" class="button left-button2">OLIVIER THEYSKENS</button></Link>
            <Link to="/kawakubo" component={tai}><button className="button" class="button left-button3">PENG TAI</button></Link>
            <Link to="/kawakubo" component={margiela}><button className="button" class="button right-button4">MARTIN MARGIELA</button></Link>
            <Link to="/kawakubo" component={knowles}><button className="button" class="button right-button5">CHARLOTTE KNOWLES</button></Link>
            <Link to="/kawakubo" component={fanning}><button className="button" class="button right-button6">LAURA AND DEANNA FANNING</button></Link>
        </div>
    );
};

export default Home;