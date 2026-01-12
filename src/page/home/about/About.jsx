import React from 'react';
import img from './../../../img/about.1044506a3d3cb06c91b2.png'
import img1 from './../../../img/sign.png'
import { FaCheck } from 'react-icons/fa';
const About = () => {
    return (
        <div className='md:py-10'>
            <div className='container mx-auto md:px-34 px-6 grid md:grid-cols-2 gap-5 items-center'>
                <div>
                    <h4 className='md:text-xl text-lg font-semibold mainColor tracking-wide'>About Us</h4>
                    <h3 className='md:text-[46px] text-[30px]  font-semibold md:mt-1'>Welcome To Gauto</h3>
                    <p className='md:text-[16px] text-[14px]  text-gray-500 mt-1 md:mt-3'>
                        Since 1992 we have not only committed ourselves to delivering exceptional repair and maintenance service to the worldwide automotive owners.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-6'>
                        <div className='flex items-center gap-2'>
                            <span className='rounded-[2px] text-[11px] md:text-sm mainbg text-white p-1 '><FaCheck /></span>
                            <p className='md:text-[16px] text-[14px] text-gray-500' >We are a trusted name</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='rounded-[2px] text-[11px] md:text-sm mainbg text-white p-1 '><FaCheck /></span>
                            <p className='md:text-[16px] text-[14px] text-gray-500' >have a larger stock of vehicles</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='rounded-[2px] text-[11px] md:text-sm mainbg text-white p-1 '><FaCheck /></span>
                            <p className='md:text-[16px] text-[14px] text-gray-500' >we deal in have all brands</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='rounded-[2px] text-[11px] md:text-sm mainbg text-white p-1 '><FaCheck /></span>
                            <p className='md:text-[16px] text-[14px] text-gray-500' >we are at worldwide locations</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mt-7'>
                        <div className='border-r-3 border-gray-200 pr-5'>
                            <img className='md:w-44 w-25' src={img1} alt="" />
                        </div>
                        <div>
                            <h2 className='md:text-[24px] text-[20px] text-gray-700 font-semibold'>Robertho Garcia</h2>
                            <p className='md:text-[15px] text-[13px] text-gray-500 md:mt-2 mt-1'>President</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;