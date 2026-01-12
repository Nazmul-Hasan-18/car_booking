import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiMenuAlt1, HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router';
const items = [{ name: "Home", path: "/" },
{ name: "About", path: "/about" },
{ name: "Service", path: "/service" },
{ name: "Cars", path: "/cars" },
{ name: "Gallery", path: "/gallery" },
{ name: "Shop", path: "/shop" },
{ name: "Pages", path: "/pages" },
{ name: "Contact", path: "/contact" },
]


const Nav = () => {
    const [click,setClick] = useState(false)
       
    
    return (
        <div className='bg-black'>
            <div className='container mx-auto md:px-34 px-6 flex justify-between items-center py-3.5'>
                <div className='hidden md:block'>
                    <div className='text-[15px]  flex items-center gap-6 uppercase font-semibold text-white '>
                        {
                            items.map(items => (
                                <div>
                                    <Link to={items.path}>
                                        <p>{items.name}</p>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=' md:hidden'>
                    <div className='relative'>
                        <div className='text-white text-3xl  cursor-pointer' onClick={()=>setClick(!click)} >
                       { click ? <RxCross2 /> : <HiMenuAlt1 /> }
                    </div>
                    <div className={` ${click ? 'block' : 'hidden'} absolute top-10 z-30 -left-8 overflow-hidden`}>
                       <div className='md:text-[15px] text-[14px] px-8 py-6 border-t border-gray-800 bg-black w-106  flex flex-col  gap-4  uppercase font-semibold text-white '>
                        {
                            items.map(items => (
                                <div>
                                    <Link to={items.path}>
                                        <p>{items.name}</p>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div className='text-white flex gap-6 items-center'>
                        <span className='text-2xl'><RiShoppingCartFill /></span>
                        <div className='hidden md:block'>
                            <div className='flex items-center bg-gray-900 py-2.5 px-4 rounded-full '>
                                <input className='outline-none' type="text" placeholder='search' name="" id="" />
                                <span className='bg- cursor-pointer'><FiSearch /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;

