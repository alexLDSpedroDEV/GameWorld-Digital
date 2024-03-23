"use client";

import React, { useState, ReactNode, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface CarrosselProps {
    children: ReactNode[];
}

const CarrosselComponent: React.FC<CarrosselProps> = ({ children }) => {
    const [curr, setCurr] = useState<number>(0);

    const prev = () => setCurr(curr => curr === 0 ? children.length - 1 : curr - 1);
    const next = () => setCurr(curr => curr === children.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        const timer = setTimeout(() => {
            next();
        }, 9000);
        return () => {
            clearTimeout(timer)
        }
    })

    return (
        
        <div className="overflow-hidden cursor-pointer relative grid items-center px-5 h-[450px] w-screen">
            <div className="flex gap-7  rounded-md transition-transform ease-out duration-500 " style={{ transform: `translateX(-${curr * 230}px)` }}>
                {children}
            </div>
            <div className="absolute inset-0 w-auto xl:w-[1200px] flex items-center top-[-55px] justify-between   px-4 ">
                <button onClick={prev} className=" rounded-full shadow xl:w-50px xl:h-50px bg-black/90 text-white">
                    <BiChevronLeft size={40}/>
                </button>
                <button onClick={next} className=" rounded-full shadow bg-black/90 text-white">
                    <BiChevronRight size={40}/>
                </button>
            </div>
        </div>
    );
};

export default CarrosselComponent;
