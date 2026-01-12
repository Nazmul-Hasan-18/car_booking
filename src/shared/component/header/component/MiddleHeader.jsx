import React from 'react';
import img from "./../../../../img/logo.png"
import img1 from "./../../../../img/download.png"
import img2 from "./../../../../img/download (1).png"
import { IoCall } from 'react-icons/io5';

const MiddleHeader = () => {
    return (
        <div>
            <div className='container mx-auto  md:px-34 md:py-6 py-3 flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={img} alt="" />
                </div>
                <div className=' hidden md:block'>
                    <div className='flex items-center gap-12'>
                        <div className='flex items-center gap-3'>
                            <img src={img1} className='w-12' alt="" />
                            <div className='flex  flex-col gap-1'>
                                <h3 className='font-semibold text-2xl'>Newyork, USA</h3>
                                <p className='text-sm'>Melbourne City, Australia</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={img2} className='w-12' alt="" />
                            <div className='flex  flex-col gap-1'>
                                <h3 className='font-semibold text-2xl'>Monday to Friday</h3>
                                <p className='text-sm'>9:00am - 6:00pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='flex items-center gap-2 uppercase mainbg text-white font-semibold text-[17px] py-3.5 pl-10 pr-8 shafe1  '>
                        <span><IoCall /></span>
                        <p>request a call</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleHeader;