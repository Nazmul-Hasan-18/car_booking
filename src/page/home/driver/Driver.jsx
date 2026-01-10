import React from 'react';
import img from "./../../../img/toyota-offer-2.861de085d1c782df9e9d.png";

const Driver = () => {
    return (
        <div className="py-20">
            <div className="relative h-90">
                <div className="mainbg h-95 w-[40%] shafe3 absolute top-0 left-0 z-10"></div>
                <div className="bg-black h-95 w-[78%] shafe4 absolute top-0 right-0 z-20">
                    <div className='flex flex-col justify-center translate-x-1/2 -ml-60 translate-y-1/2'>
                        <p className='text-white font-bold text-4xl tracking-wider leading-14'>Do You Want To Earn With Us? <br /> So Don't be Late.</p>
                         <p className='uppercase mt-9 font-semibold text- text-white w-48 text-center py-3 hover:bg-[#ec3323] duration-300 cursor-pointer border-2 border-[#ec3323]'>become a driver</p>
                    </div>
                </div>
                <div className="absolute top-20 left-50 z-50 pointer-events-none">
                    <img className='w-112' src={img} alt="car" />
                </div>

            </div>
        </div>
    );
};

export default Driver;
