import React from 'react';
import './Home.css'
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='background-cover'>
            <div className='background-overlay'>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;