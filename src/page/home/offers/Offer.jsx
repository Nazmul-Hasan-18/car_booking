import React from 'react';
import Category from './component/Category';
import CarCard from './component/CarCard';

const Offer = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='font-semibold text-lg mainColor'>Come with</p>
                <h2 className='text-[46px] font-semibold mt-1'>Hot offers</h2>
            </div>
            <div  className='flex flex-col justify-center items-center gap-6 py-8'>
                <Category></Category>
            </div>
        </div>
    );
};

export default Offer;