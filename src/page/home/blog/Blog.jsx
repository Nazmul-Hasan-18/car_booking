import React from 'react';
import { FaComments, FaEye } from 'react-icons/fa';

const Blog = () => {
    const items =[{name:"If Your Car's bettery down." , view:"310", comment:"45",img:"https://gauto-react.themescare.com/static/media/blog-1.a096363c44cf6e780297.jpg"},
                  {name:"If Your Car's bettery down." , view:"350", comment:"65",img:"https://gauto-react.themescare.com/static/media/blog-2.5aa50c12be3769556bd8.jpg"},
                 {name:"If Your Car's bettery down." , view:"370", comment:"49",img:"https://gauto-react.themescare.com/static/media/blog-3.6670c83bfc88b4968243.jpg"}
    ]
    return (
        <div>
            <div className='container mx-auto px-34 pb-14'>
                <div className='text-center py-5' >
                    <p className='font-semibold text-lg mainColor'>latest</p>
                    <h2 className='text-[46px] font-semibold mt-1'>Our blog</h2>
                </div>
                <div className='grid grid-cols-3 gap-7'>
                    {
                        items.map(item=>(
                            <div className='border-3 border-gray-200'>
                                <img src={item.img} alt="" />
                                <div className='px-5'>
                                    <h3 className='text-xl font-semibold text-gray-900 tracking-wide border-b-3 border-gray-200 py-4'>{item.name}</h3>
                                    <div className='flex items-center justify-between py-5'>
                                        <h4 className='text-gray-400 text-[15px]'>July 13, 09:43 am</h4>
                                        <div className='flex items-center gap-5'>
                                            <div className='flex items-center gap-1'>
                                                <span className='mainColor'><FaEye /></span>
                                                <p className='text-sm text-gray-400'>{item.view}</p>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <span className='mainColor'><FaComments /></span>
                                                <p className='text-sm text-gray-400'>{item.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;