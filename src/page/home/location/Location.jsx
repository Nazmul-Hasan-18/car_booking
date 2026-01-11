import React from 'react';
import { IoCall } from 'react-icons/io5';

const Location = () => {
    return (
        <div className='container mx-auto px-34 pt-5 pb-14'>
            <div className=' text-white  flex flex-col justify-center items-center bg-black px-28 py-15'>
                <h2 className='text-5xl font-semibold tracking-wide '>With Over <span>150</span> Partners Locations</h2>
                <p className='text-sm text-center mt-6 text-gray-300 leading-7'>Labore dolore magna aliqua ipsum veniam quis nostrud exercitation voluptate velit cillum dolore feu fugiat nulla excepteur sint occaecat <br /> sed ipsum cupidatat proident culpa exercitation ullamco laboris aliquik.</p>
                <div className='flex items-center  gap-3 mt-7'>
                    <span className='text-5xl '><IoCall /></span>
                    <div>
                        <p className='text-xl font-semibold mainColor'> Need any help?</p>
                        <p className='mt-1'>01756966372</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;