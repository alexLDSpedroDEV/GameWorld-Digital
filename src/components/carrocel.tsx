"use client";

import React, { useState, ReactNode, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useRouter } from 'next/navigation'; 
import Image from "next/image";


import { format } from 'url';

interface Slider  {
    
        "id": number;
        "src": string;
        "title": string;
        "link": string;
        "desc": string;
        "value": number;
}

interface CarrocelProps {
    sliders: Slider[];
}

const CarrosselComponent: React.FC<CarrocelProps> = ({sliders}) => {
    const [curr, setCurr] = useState<number>(0);

    const prev = () => setCurr(curr => curr === 0 ? sliders.length - 1 : curr - 1);
    const next = () => setCurr(curr => curr === sliders.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        const timer = setTimeout(() => {
            next();
        }, 8000);
        return () => {
            clearTimeout(timer)
        }
    })
    
    const router = useRouter();

    
    const handleClick = (data: Slider) => {
        console.log("placing your order");
        const url = format({ // Converte o objeto de configuração para uma string de URL
            pathname: "/venda",
            query: {
                id: data.id,
                src: data.src,
                title: data.title,
                link: data.link,
                desc: data.desc,
                value: data.value
            }
        });
        router.push(url); // Navega para a URL formatada
    };


    return (
        
        <div className="  relative grid items-center px-5 h-[450px] w-screen">
            <div className="flex gap-7  rounded-md transition-transform ease-out duration-500 " style={{ transform: `translateX(-${curr * 230}px)` }}>
                {sliders && sliders.map((s, key) => (
                    <div  key={key} className="text-white h-[450px] grid max-w-[222px]">
                        <Image src={s.src} alt="dawd" className="rounded-xl max-w-[200px] h-[300px]" height={0} width={300} />
                        <h1 className="text-[1em] pt-4 font-serif">{s.title}</h1>
                        <div className="grid justify-around items-center grid-cols-2">
                            <p>${s.value}</p>
                            <div onClick={() => handleClick(s)} className="bg-[#3CB6C0] cursor-pointer text-white uppercase text-center py-2 rounded-md">visualizar</div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="absolute inset-0 w-auto h-[150px] xl:w-[1200px] flex items-center top-[85px] justify-between   px-4 ">
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
