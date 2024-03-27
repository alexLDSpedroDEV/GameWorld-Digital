"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/navBar';
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';


interface AboutPageProps {
  searchParams: {
    id: number;
    src: string;
    title: string;
    link: string;
    desc: string;
    value: string;
    arrayLinks: string[];
  }
}
const Page: React.FC<AboutPageProps> = ({ searchParams }) => {

  const [curr, setCurr] = useState<number>(0);
  const [links, setLinks] = useState<string[]>([]);

  const prev = () => setCurr(curr => curr === 0 ? links.length - 1 : curr - 1);
  const next = () => setCurr(curr => curr === links.length - 1 ? 0 : curr + 1);


  useEffect(() => {

    const linksArray = searchParams.arrayLinks.split(',');
    setLinks(linksArray);

  }, [searchParams.arrayLinks]);

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 8000);
    return () => {
      clearTimeout(timer)
    }
  })



  return (
    <section className='w-screen h-auto bg-black min-h-[100vh]'>
      <NavBar title="React" />
      <div className='grid grid-cols-1 m-auto pb-6'>
        <div className='text-white order-2 md:py-10 px-4 md:px-0 md:w-[90vw] md:m-auto max-w-[1100px]'>
          <h1 className='text-[2em] md:text-[3em] py-5'>{searchParams.title}</h1>
          <p className='text-white/50 md:text-[1em]'>{searchParams.desc}</p>
          <p className='my-10'>To obtain: {searchParams.value !== "Free" ? searchParams.value + "$" : searchParams.value}</p>
          <a href={searchParams.link} target="_blank" rel="noopener noreferrer" className=' bg-[#3CB6C0] text-white uppercase px-6 py-4 rounded-md '>To acquire</a>
        </div>


        {/* carrocel */}
        <div className='relative grid items-center h-[450px]  w-screen'>
          <div style={{ transform: `translateX(-${curr * 100}vw)` }} className='order-1 flex  transition-transform ease-out duration-500'>

            {links.map((link, index) => (
              <div key={index} className='h-[400px] grid  '>
                <Image className=' object-contain rounded-xl min-w-[100vw] h-[400px]' width={400} height={400} alt='image jogo' src={link}></Image>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 w-auto h-[150px] xl:w-[1200px] flex items-center top-[250px] justify-between   px-4 ">
                <button onClick={prev} className=" rounded-full shadow xl:w-50px xl:h-50px bg-black/90 text-white">
                    <BiChevronLeft size={40} />
                </button>
                <button onClick={next} className=" rounded-full shadow bg-black/90 text-white">
                    <BiChevronRight size={40} />
                </button>
            </div>
        
      </div>
    </section>
  );
}

export default Page;
