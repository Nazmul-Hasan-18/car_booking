import React from 'react';

import HeroBotoom from './HeroBotoom';
const Hero = () => {
    return (
        <div className=' relative'>
            <div className=' hero flex flex-col justify-center'>
                <div className='container mx-auto px-34 text-white mt-[-40px]'>
                    <span className='text-3xl'> For Rent $70 Per Day</span>
                    <h1 className='text-7xl font-semibold mt-7 leading-20 tracking-wider'>Reserved Now <br /> & Get 50% Off</h1>
                    <p className='uppercase mt-9 font-semibold text-lg w-44 text-center py-2.5 hover:bg-[#ec3323] duration-300 cursor-pointer border-2 border-[#ec3323]'>reserve now!</p>
                </div>
            </div>
            <HeroBotoom></HeroBotoom>
        </div>
    );
};

export default Hero;