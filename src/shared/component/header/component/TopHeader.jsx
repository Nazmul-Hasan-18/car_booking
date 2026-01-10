import React from 'react';
import { BiLogIn } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { IoCall } from 'react-icons/io5';
const items = [
    {
        name: "Login",
        icon: <BiLogIn />
    },
    {
        name: "Register",
        icon: <FaUser />
    },
    {
        name: "Languse",
        icon: <GrLanguage />
    },
]
const TopHeader = () => {
    return (
        <div className='relative'>
            <div className='bg-black text-white  text-sm py-4 font-semibold'>
                <div className='container mx-auto px-34'>
                    <div className='flex  justify-end gap-8 items-center'>
                        {
                            items.map(item => (
                                <div className='flex items-center gap-1'>
                                    <p className='text-lg'>{item.icon}</p>
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='mainbg w-140 absolute top-0 overflow-hidden  shafe' >
                <div className='  text-white font-semibold text-sm container pl-53 '>
                    <div className='flex items-center gap-4 py-4.5'>
                        <div>
                            <p>Need Help?</p>
                        </div>
                        <div className='flex  items-center gap-1'>
                            <div className='mainColor bg-white p-2 rounded-full text-'>
                                <IoCall />
                            </div>
                            <p>Call: +321 123 45 978</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>

    );
};

export default TopHeader;