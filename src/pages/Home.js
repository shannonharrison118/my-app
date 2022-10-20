import React from 'react';
import './Home.css';
import room from '../imgs/3d-room-grid.jpg';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '../components/Navbar';
/*import kawakubo from './designers/kawakubo';
import theyskens from './designers/theyskens';*/

const Home = () => {
    return(
        <div id='home'>
            <img src={room} className="backgorund-img" />
            <Navbar />
            <Routes>
                <Route path="/kawakubo" element={<rei kawakubo />} />
                <Route path="/theyskens" element={<olivier theyskens />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Home;