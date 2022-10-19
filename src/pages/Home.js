import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Navbar';
import kawakubo from './pages/designers/kawakubo';
import theyskens from './pages/designers/theyskens';

const Home = () => {
    return(
        <div id='home'>
            <Navbar />
            <Routes>
                <Route exact path="/kawakubo" element={<kawakubo />} />
                <Route exact path="/theyskens" element={<theyskens />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Home;