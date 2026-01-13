import React from 'react';
import { CiSettings } from 'react-icons/ci';
import { FaCar } from 'react-icons/fa';
import { IoIosSpeedometer } from 'react-icons/io';
import { IoSettings } from 'react-icons/io5';
import { Link } from 'react-router';

const Car = ({ data }) => {
    return (
        <div>
            <div className='border-3 border-gray-100 rounded-sm w-full  flex flex-col items-center justify-center px-9 pt-6 overflow-hidden'>
                <img className='md:w-63 w-50 ' src={data.image} alt="" />
                <h1 className='md:text-2xl text-xl font-semibold text-gray-800 mt-3'>{data.name}</h1>
                <p className='font-semibold md:text-lg md:mt-4 mt-2'>{data.price} <span className='mainColor '>/ Day</span></p>
                <div className='flex items-center gap-4 text-gray-500 text-[15px] mt-3'>
                    <div className='flex items-center gap-1'>
                        <span className='mainColor text-[14px] md:text-[16px]'><FaCar /></span>
                        <p className='text-[12px] md:text-[16px]'>Model:{data.model}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span className='mainColor text-[14px] md:text-[16px]'><IoSettings /></span>
                        <p className='text-[12px] md:text-[16px]'>Automatic</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span className='mainColor text-[14px] md:text-[16px]'><IoIosSpeedometer /></span>
                        <p className='text-[12px] md:text-[16px]'>20kmpl</p>
                    </div>
                </div>
                <div className='flex items-center group relative md:py-8 py-6 mt-5' >
                    <Link to={`rentCar/${data.id}`}>
                        <div className='bg-black w-54.5 md:py-3 py-2.5 text-center text-white uppercase font-semibold text-[13px] md:text-[15px] shafe8 absolute top-0  -right-5'>
                            <span className=''>rent car</span>
                        </div>
                    </Link>
                    <Link>
                        <div className='mainbg w-55.5  md:py-3 py-2.5 text-center text-white uppercase font-semibold  text-[13px] md:text-[15px]  shafe9 absolute top-0  -left-6 z-20'>
                            <span>Details</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Car;