import React, { useEffect, useRef, useState } from "react";
import img from "./../../../img/find-box-bg.622edf2be5ad83bf8fa8.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";

const HeroBotoom = () => {
    const options = [
        {
            name: "From Address",
            icon:<MdOutlineArrowDropDown />,
            label: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"],
        },
        {
            name: "To Address",
             icon:<MdOutlineArrowDropDown />,
            label: ["Toyota", "Honda", "BMW", "Tesla"],
        },
        {
            name: "Type",
             icon:<MdOutlineArrowDropDown />,
            label: ["AC","Non AC"],
        },
        {
            name: "Date",
            icon:<SlCalender />,
           label:[]
        },
        {
            name: "Time",
            icon:<IoMdTime />,
            label:[]
          
        },
       

    ];

    const [openIndex, setOpenIndex] = useState(null);
    const [values, setValues] = useState({});
    const dropdownRefs = useRef([]); // 

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedInside = dropdownRefs.current.some((ref) =>
                ref?.contains(event.target)
            );
            if (!clickedInside) {
                setOpenIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="-translate-y-18">
            <div className="container mx-auto px-6 md:px-34">
                <div className="flex items-center shadow-2xl shadow-gray-200">
                    <div className="relative hidden md:block">
                        <img className="w-140 h-60" src={img} alt="" />
                        <div className="absolute top-1/3 px-8">
                            <span className="text-4xl font-semibold text-white">
                                Search Your Best Cars here.
                            </span>
                        </div>
                    </div>
                    <div className="flex  flex-col justify-center items-center md:h-60 py-8 md:py-0  w-full bg-white">
                        <span className="md:text-4xl text-2xl w-60 text-center font-semibold block md:hidden">
                                Search Your Best Cars here.
                            </span>
                        <div className=" pl-2 text-sm md:text-[16px] grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-y-8 md:gap-x-5 pt-5">
                            {options.map((data, index) => (
                                <div>
                                    <div
                                    key={index}
                                    className="relative  w-64 flex jube items-center  border border-gray-300  cursor-pointer"
                                    ref={(el) => (dropdownRefs.current[index] = el)}
                                     onClick={() =>
                                            setOpenIndex(openIndex === index ? null : index)
                                        }
                                >
                                    <a href="#">{data.button}</a>
                                    <input
                                        type="text"
                                        placeholder={data.name}
                                        value={values[index] || ""}
                                        readOnly
                                       
                                        className="  px-3 md:px-4 md:py-3 py-2.5 border-none outline-none cursor-pointer"
                                    />
                                    
                                    {openIndex === index && (
                                        <ul className="absolute top-13   w-full bg-white border border-gray-300  shadow-lg z-10">
                                            {data.label.map((item, i) => (
                                                <li
                                                    key={i}
                                                    onClick={() => {
                                                        setValues({ ...values, [index]: item });
                                                        setOpenIndex(null);
                                                    }}
                                                    className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer text-[14px] md:text-[16px]"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <span className="ml-8 md:ml-0">{data.icon}</span>
                                </div>
                                
                                </div>
                            ))}
                            <div className="border-2 py-2.5 md:py-0 flex flex-col justify-center items-center border-[#ec3323] hover:bg-[#ec3323] duration-500 text-[#ec3323] hover:text-white  cursor-pointer">
                                <p className=" uppercase font-semibold tracking-wider  ">find car</p>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBotoom;
