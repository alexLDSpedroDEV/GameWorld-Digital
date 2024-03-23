"use client"

import React from "react";
import CarrocelComponts from "@/components/carrocel";
import Image from "next/image";

const maisVendidos = () => {

    const slide = [
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
                <div className="text-[2em] mb-10 pl-5 font-bold text-white ">Best sellers</div>
                <CarrocelComponts>
                    {
                    slide.map((s, key) => (
                        <div key={key} className="text-white h-[450px] grid max-w-[222px]">
                            <Image src={s.src} alt="dawd" className="rounded-xl max-w-[200px] h-[300px]" height={0} width={300}></Image>
                            <h1 className="text-[1em] pt-4 font-serif">{s.title}</h1>
                            <div className="grid justify-around items-center grid-cols-2">
                                <p>${s.value}</p>
                                <button className="p-2 bg-[#3CB6C0] rounded-lg">Purchase</button>
                            </div>
                        </div>
                    ))}
                </CarrocelComponts>

            </div>
        </section>
    );
};

export default maisVendidos;