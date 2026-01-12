import React from 'react';

import HeroBotoom from './HeroBotoom';
const Hero = () => {
    return (
        <div className=' relative'>
            <div className=' hero flex flex-col justify-center h-100  md:h-170'>
                <div className='container mx-auto px-6 md:px-34 text-white mt-[-60px] md:mt-[-40px]'>
                    <span className='md:text-2xl  lg:text-3xl text-xl'> For Rent $70 Per Day</span>
                    <h1 className='md:text-7xl md:w-160 w-80  md:texts text-3xl font-semibold md:mt-7 mt-2 md:leading-20 tracking-widest'>Reserved Now  & Get 50% Off</h1>
                    <p className='uppercase mt-4 md:mt-9 font-semibold  text-sm md:text-lg md:w-44 w-35 py-2 text-center md:py-2.5 hover:bg-[#ec3323] duration-300 cursor-pointer border-2 border-[#ec3323]'>reserve now!</p>
                </div>
            </div>
            <HeroBotoom></HeroBotoom>
        </div>
    );
};

export default Hero;