import React, { useState, useEffect } from 'react';
import img1 from './../../../img/1.png'
import img2 from './../../../img/2.png'
import img3 from './../../../img/3.png'
import img4 from './../../../img/4.png'
import img5 from './../../../img/5.png'
import img6 from './../../../img/6.png'

const items = [
    { id:"01", image:img1, name:"City Transfer", title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam animi nobis minima, quod nesciunt quibusdam " },
    { id:"02", image:img2, name:"Air Transfer", title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam animi nobis minima, quod nesciunt quibusdam " },
    { id:"03", image:img3, name:"Hospital Transfer", title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam animi nobis minima, quod nesciunt quibusdam " },
    { id:"04", image:img4, name:"Wedding Ceremony", title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam animi nobis minima, quod nesciunt quibusdam " },
    { id:"05", image:img5, name:"Whole City Tour", title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam animi nobis minima, quod nesciunt quibusdam " },
    { id:"06", image:img6, name:"Baggage Transport", title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam animi nobis minima, quod nesciunt quibusdam " },
]

const Service = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev < items.length - 3 ? prev + 1 : 0));
        }, 3000); // 3 second

        return () => clearInterval(interval);
    }, []);

    // Handle Dot Click
    const goToSlide = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div className='bg-[#f6f6fb] py-15'>
            <div className='container mx-auto px-6 md:px-34'>
                <div className='text-center'>
                    <p className='font-semibold text-lg mainColor'>See Our</p>
                    <h2 className='md:text-[46px] text-[32px] font-semibold md:mt-1'>Latest Services</h2>
                </div>
                <div className='relative overflow-hidden mt-10 '>
                    <div 
                        className='flex  transition-transform duration-700 ease-in-out '
                        style={{ transform: `translateX(-${currentIndex * (100/3)}%)` }}
                    >
                        {items.map((item) => (
                            <div key={item.id} className='flex-shrink-0 w-1/3 px-4'>
                                <div className='h-75 bg-white px-8 flex flex-col justify-center relative shadow-xl shadow-gray-300'>
                                    <span className='text-6xl text-gray-100 font-semibold absolute right-4 top-7 '>{item.id}</span>
                                    <img className='w-16' src={item.image} alt="" />
                                    <h3 className='text-2xl font-semibold tracking-wide text-gray-700 mt-5'>{item.name}</h3>
                                    <p className='text-sm  tracking-wide leading-6 mt-3 text-gray-400'>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className='flex justify-center mt-10'>
                    {items.slice(0, items.length - 2).map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-1.5 h-3.5 mx-1 cursor-pointer ${currentIndex === idx ? 'bg-red-500' : 'bg-gray-800'}`}
                            style={{ borderRadius: '0%' }}
                            onClick={() => goToSlide(idx)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
