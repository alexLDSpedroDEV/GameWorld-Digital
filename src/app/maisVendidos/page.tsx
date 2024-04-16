"use client"

import React from "react";
import CarrocelComponts from "@/components/carrocel";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 

interface Slide {
  id: number;
  src: string;
  title: string;
  link: string;
  desc: string;
  value: any;
  arrayLinks: ArrayLinks[];
}

interface ArrayLinks {
  id: string,
  link: string 
}

interface CarrocelProps {
  sliders: Slide[];
  title: string;
}

const MaisVendidos: React.FC<CarrocelProps> = ({ sliders, title }) => { 

  const router = useRouter();

  const handleClick = () => { 
    console.log("placing your order");
    router.push("/banner/page"); 
  }

  return (
    <section className=" bg-black grid  justify-center mt-4 font m-auto w-screen h-[600px]">
      <div className="xl:max-w-[1400px] w-auto overflow-hidden">
        <div className="text-[2em] mb-10 pl-5 font-bold text-white ">{title}</div>
        <CarrocelComponts sliders={sliders}/>
      </div>
    </section>
  );
};

export default MaisVendidos;

