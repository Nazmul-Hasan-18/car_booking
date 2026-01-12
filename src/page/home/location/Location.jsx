import React from 'react';
import { IoCall } from 'react-icons/io5';

const Location = () => {
    return (
        <div className='container mx-auto  md:px-34 pt-5 pb-14'>
            <div className=' text-white  flex flex-col justify-center  items-center bg-black px-6 md:px-28 py-15'>
                <h2 className='md:text-5xl leading-10 text-center text-[27px] font-semibold tracking-wider '>With Over <span className='mainColor'>150</span> Partners Locations</h2>
                <p className='md:text-sm text-[12px] text-center mt-5 md:mt-6 text-gray-300 md:leading-7 leading-6'>Labore dolore magna aliqua ipsum veniam quis nostrud exercitation voluptate velit cillum dolore feu fugiat nulla excepteur sint occaecat <br /> sed ipsum cupidatat proident culpa exercitation ullamco laboris aliquik.</p>
                <div className='flex items-center  gap-3 mt-7'>
                    <span className='md:text-5xl text-4xl'><IoCall /></span>
                    <div>
                        <p className='md:text-lg font-semibold mainColor text-sm'> Need any help?</p>
                        <p className='md:mt-2 mt-1 font-semibold md:text-xl tracking-wider'>+08801756966372</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;