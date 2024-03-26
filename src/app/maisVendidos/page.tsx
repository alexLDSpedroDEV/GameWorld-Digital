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
}

interface PropsData {
  title: string
}

const MaisVendidos = (props: PropsData) => {

  const router = useRouter();

    const handlesClick = () => {
        console.log("placing ypor order");
        router.push("banner/page")
    }

  const slide: Slide[] = [
    {
      id: 0,
      src: "/popular/image1.jpg",
      title: "Counter-strike 2",
      link: "Empresa",
      desc: "Prince of Persia: The Lost Crown is an action-adventure game developed and published by Ubisoft, part of Prince of Persia series. It was released for Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One and Xbox Series X/S on 18 January 2024, and received positive reviews from critics.",
      value: 200,
    },
    {
      id: 1,
      src: "/popular/image2.jpg",
      title: "Valorant",
      link: "Valorant",
      desc: "Valorant",
      value: 200,
    },
    {
      id: 1,
      src: "/popular/image2.jpg",
      title: "Valorant",
      link: "Valorant",
      desc: "Valorant",
      value: 200,
    },
    {
      id: 2,
      src: "/popular/image2.jpg",
      title: "Valorant",
      link: "Valorant",
      desc: "Valorant",
      value: 200,
    },
    {
      id: 2,
      src: "/popular/image2.jpg",
      title: "Valorant",
      link: "Valorant",
      desc: "Valorant",
      value: 200,
    },
    {
      id: 1,
      src: "/popular/image2.jpg",
      title: "Valorant",
      link: "Valorant",
      desc: "Valorant",
      value: 200,
    },
    {
      id: 2,
      src: "/popular/image2.jpg",
      title: "Valorant",
      link: "Valorant",
      desc: "Valorant",
      value: 200,
    },





  ]


  return (
    <section className=" bg-black grid justify-center  grid mt-4  m-auto w-screen h-[600px]">
      <div className=" xl:max-w-[1200px] w-auto overflow-hidden">
        <div className="text-[2em] mb-10 pl-5 font-bold text-white ">{props.title}</div>
        <CarrocelComponts sliders={slide}/>
      </div>
    </section>
  );
};

export default MaisVendidos;
