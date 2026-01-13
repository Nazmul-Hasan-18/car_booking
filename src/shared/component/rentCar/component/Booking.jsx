import React from 'react';
import { BiCaretRight } from 'react-icons/bi';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router';

const Booking = () => {
    return (
        <div>
            <div className='flex flex-col items-center bg-black py-20 border-t border-gray-600'>
                <h3 className='text-3xl md:text-5xl uppercase text-white font-semibold'>car booking</h3>
                <div className=' flex gap-4 items-center mt-5'>
                    <div className='flex items-center  gap-2'>
                        <span className='mainColor md:text-[16px] text-[14px]'><IoHome /></span>
                        <Link to='/'><p className='text-white text-sm md:text-[16px]'>Home</p></Link>
                        <span className='mainColor md:text-xl mt-1'><BiCaretRight /></span>
                    </div>
                    <p className='text-white text-sm md:text-[16px]'>CarBooking</p>
                </div>
            </div>
        </div>
    );
};

export default Booking;