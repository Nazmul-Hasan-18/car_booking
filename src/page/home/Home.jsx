import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Service from './service/Service';
import Driver from './driver/Driver';
import Offer from './offers/Offer';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Service></Service>
            <Driver></Driver>
            <Offer></Offer>
        </div>
    );
};

export default Home;