import React from 'react';
import img from './../../../img/about.1044506a3d3cb06c91b2.png'
import img1 from './../../../img/sign.png'
import { FaCheck } from 'react-icons/fa';
const About = () => {
    return (
        <div className='py-10'>
            <div className='container mx-auto px-34 grid grid-cols-2 gap-5 items-center'>
                <div>
                    <h4 className='text-xl font-semibold mainColor tracking-wide'>About Us</h4>
                    <h3 className='text-[46px] font-semibold mt-1'>Welcome To Gauto</h3>
                    <p className='text-[16px] text-gray-500 mt-3'>
                        Since 1992 we have not only committed ourselves to delivering exceptional repair and maintenance service to the worldwide automotive owners.</p>
                    <div className='grid grid-cols-2 gap-3 mt-6'>
                        <div className='flex items-center gap-2'>
                            <span className='rounded-[2px] text-sm mainbg text-white p-1 '><FaCheck /></span>
                            <p className='text-[16px] text-gray-500' >We are a trusted name</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='rounded-[2px] text-sm mainbg text-white p-1 '><FaCheck /></span>
                            <p className='text-[16px] text-gray-500' >We are a trusted name</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='rounded-[2px] text-sm mainbg text-white p-1 '><FaCheck /></span>
                            <p className='text-[16px] text-gray-500' >We are a trusted name</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='rounded-[2px] text-sm mainbg text-white p-1 '><FaCheck /></span>
                            <p className='text-[16px] text-gray-500' >We are a trusted name</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mt-7'>
                        <div className='border-r-3 border-gray-200 pr-5'>
                            <img className='w-44' src={img1} alt="" />
                        </div>
                        <div>
                            <h2 className='text-[24px] text-gray-700 font-semibold'>Robertho Garcia</h2>
                            <p className='text-[15px] text-gray-500 mt-2'>President</p>
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