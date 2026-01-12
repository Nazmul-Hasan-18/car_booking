import React from 'react';
import UseCustomHook from '../../../../shared/component/hook/UseCustomHook';
import Car from '../../../../shared/component/sinlgecar/Car';

const CarCard = ({id}) => {
    const {data} = UseCustomHook('category.json')
    const matchId = id ? data.filter(dat=> dat.categoryId === id) : data
    return (
        <div className='container mx-auto px-6 md:px-34 grid grid-cols-1 md:grid-cols-3 gap-8 '>
            
            {
                matchId.slice(0,6).map(data=>(
                   <div className=''>
                    <Car data={data}></Car>
                   </div>
                ))
            }
        </div>
    );
};

export default CarCard;