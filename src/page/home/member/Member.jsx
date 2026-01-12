import React from 'react';

const Member = () => {
    const items = [{name:"Marco Ghaly",exps:"4 year experience" , img:"https://gauto-react.themescare.com/static/media/driver-1.cc28e20ef89a3dd83430.jpg"},
                   {name:"Sheref joe",exps:"7 year experience" , img:"https://gauto-react.themescare.com/static/media/driver-2.95a4bb8b7d42068eb9bf.jpg"},
                   {name:"Arafa lep",exps:"3 year experience" , img:"https://gauto-react.themescare.com/static/media/driver-4.c8e5ec8a940eb337ad54.jpg"},
                   {name:"Endly Kent",exps:"4 year experience" , img:"https://gauto-react.themescare.com/static/media/driver-3.154de7902469bef24a47.jpg"},
    ]
    return (
        <div className='container mx-auto md:px-34 px-6 py-15  flex flex-col items-center'>
              <div className='text-center py-5' >
                <p className='font-semibold text-lg mainColor'>experts</p>
                <h2 className='md:text-[46px] text-[32px] font-semibold md:mt-1 '>Our Members</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-7 py-4'>
                {
                   items.map(item=>(
                    <div className='shadow'>
                        <img src={item.img} alt="" />
                        <div className='flex flex-col justify-center items-center bg-white py-9 '>
                            <h3 className='text-2xl font-semibold tracking-wide'>{item.name}</h3>
                            <p className='text-[14px] mt-2 text-gray-600'>{item.exps}</p>
                        </div>
                    </div>
                   )) 
                }
               
            </div>
             <div className=''>
                     <p className='uppercase mt-4 md:mt-9 font-semibold  text-sm md:text-lg md:w-44 w-39 py-2.5 text-center md:py-2.5 hover:bg-[#ec3323] duration-300 cursor-pointer border-2 border-[#ec3323]'>become a driver</p>
            </div>
        </div>
    );
};

export default Member;