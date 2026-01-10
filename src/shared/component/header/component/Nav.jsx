import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingCartFill } from 'react-icons/ri';
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
    return (
        <div className='bg-black'>
            <div className='container mx-auto px-34 flex justify-between items-center py-3.5'>
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
                <div>
                    <div className='text-white flex gap-6 items-center'>
                        <span className='text-2xl'><RiShoppingCartFill /></span>
                        <div className='flex items-center bg-gray-900 py-2.5 px-4 rounded-full'>
                            <input className='outline-none' type="text" placeholder='search' name="" id="" />
                            <span className='bg- cursor-pointer'><FiSearch /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;

