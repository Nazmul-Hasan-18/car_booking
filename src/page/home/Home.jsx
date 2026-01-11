import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Service from './service/Service';
import Driver from './driver/Driver';
import Offer from './offers/Offer';
import Tesmosial from './tesmosial/Tesmosial';
import Member from './member/Member';
import Location from './location/Location';
import Blog from './blog/Blog';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Service></Service>
            <Driver></Driver>
            <Offer></Offer>
            <Tesmosial></Tesmosial>
            <Member></Member>
            <Location></Location>
            <Blog></Blog>
        </div>
    );
};

export default Home;