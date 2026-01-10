import React, { useState } from 'react';
import { data } from 'react-router';
import CarCard from './CarCard';
const items = [
    {
        id:1,
        name:"nissan"
    },
    {
        id:2,
        name:"Toyota"
    },
    {
        id:3,
        name:"audi"
    },
    {
        id:4,
        name:"mercedes"
    },
]
const Category = () => {
    const [click , setClick] = useState(null)
    const handleId = (id)=>{
        setClick(id)
    }
    return (
        <div>
            <div className='flex items-center uppercase font-semibold '>
            <p className={`${click === null ? 'mainbg text-white' : 'bg-black text-white shafe6'} cursor-pointer py-2.5 px-12 shafe5`} onClick={()=>handleId(null)}>all brands</p>
            {
                items.map(item=>(
                    <div className={`${click === item.id ? '  mainbg text-white shafe5' : 'bg-black text-white shafe6'} cursor-pointer py-2.5 px-13 duration-300 hover:bg-[#ec3323]   shafe7`} onClick={()=>handleId(item.id)} >
                        <p >{item.name}</p>
                    </div>
                ))
            }
        </div>
        <div  className='flex flex-col justify-center items-center gap-6 py-8'>
            <CarCard></CarCard>
        </div>
        </div>
    );
};

export default Category;