import React from 'react';
import Category from './component/Category';


const Offer = () => {
    return (
        <div className=''>
            <div className='text-center py-5' >
                <p className='font-semibold text-lg mainColor'>Come with</p>
                <h2 className='text-[46px] font-semibold mt-1'>Hot offers</h2>
            </div>
            <div  className='h-100vh '>
                <Category></Category>
            </div>
        </div>
    );
};

export default Offer;