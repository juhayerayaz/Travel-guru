import React from 'react';
import './Home.css'
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div className='background-cover'>
            <div className='background-overlay'>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Home;