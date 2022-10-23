import React from 'react';
import './Home.css';
import room from '../imgs/3d-room-grid.jpg';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '../components/Navbar';
import kawakubo from './designers/kawakubo';
import theyskens from './designers/theyskens';

console.log(room);

const Home = () => {
    return(
        <div id='home'>
            <p>homepage</p>
            <img src={room} className="background-img" alt=""/>
            <Navbar />
            <Routes>
                <Route path="/kawakubo" component={kawakubo} />
                <Route path="/theyskens" component={theyskens} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Home;