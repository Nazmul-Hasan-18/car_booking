import React from 'react';
import { Link, useParams } from 'react-router';
import UseCustomHook from '../../hook/UseCustomHook';
import Booking from './Booking';
import { FaCarAlt, FaEye, FaKey, FaLock, FaStar } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { RiBtcLine } from 'react-icons/ri';
import { MdConnectedTv } from 'react-icons/md';
import { PiSpeedometerFill } from 'react-icons/pi';

const RentCar = () => {
    const items = [
    { icon: <FaCarAlt />, name: "Model: 2023" },
    { icon: <FaEye />, name: " GPS Navigation" },
    { icon: <FaCarAlt />, name: "Model: 2023" },

    { icon: <IoSettings />, name: " Automatic" },
    { icon: <FaLock />, name: " Anti-Lock Brakes" },
    { icon: <IoSettings />, name: " Automatic" },

    { icon: <PiSpeedometerFill />, name: "Kmpl" },
    { icon: <FaKey />, name: " Remote Keyless" },
    { icon: <PiSpeedometerFill />, name: "Kmpl" },

    { icon: <RiBtcLine />, name: "V-6 Cylinder" },
    {icon: <MdConnectedTv />, name: " Rear-Seat DVD"},
    { icon: <RiBtcLine />, name: "V-6 Cylinder" },
]

    const { id } = useParams();
    const { data } = UseCustomHook('/category.json');
    const matchId = data.find((data) => data.id === Number(id));
    console.log(matchId);
    return (
        <div>
            <div>
                <Booking></Booking>
            </div>
            <div className='container mx-auto px-6 md:px-34 grid grid-cols-1 md:grid-cols-2 gap-6 py-18'>
                <div className='bg-gray-300 flex flex-col justify-center items-center py-13'>
                    <img className='md:w-120 w-66' src={matchId?.image} alt="" />
                </div>
                <div>
                    <p className='font-semibold uppercase mainbg text-white text-[13px] md:text-[16px] md:w-23 w-19   py-1 text-center rounded-sm'>relntal</p>
                    <h2 className=' text-3xl md:text-4xl font-semibold mt-4 text-gray-900'>{matchId?.name}</h2>
                    <div className=' mt-2 md:mt-3 flex items-center gap-4'>
                        <h4 className='font-semibold text-[16px] md:text-[18px] '>{matchId?.price}<span className=' md:text-[17px] text-[15px] mainColor '>/ Day</span></h4>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-0.5 text-amber-400 text-[14px] md:text-[16px]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className='md:text-[15px] text-[13px]'>(123 Rating)</p>
                        </div>
                    </div>
                    <p className='mt-2 md:mt-3 md:text-[15px]  text-[13px]  tracking-wide md:leading-7'>consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel,dapibus tempus nulla. Donec vel nulla dui.</p> 
                    <div className='grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-3 gap-y-2.5  md:gap-y-2 mt-6'>
                        {
                            items.map(item=>(
                                <div className='flex items-center gap-1'>
                                    <span className='mainColor text-sm md:text-[16]'>{item.icon}</span>
                                    <p className='text-[13px] md:text-[15px] text-gray-400'>{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentCar;
