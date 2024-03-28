"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/navBar';
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Footer from '../footer/page';

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
    }, 18000);
    return () => {
      clearTimeout(timer)
    }
  })

  const router = useRouter();

    // Dentro da função handleClick
    const handleClick = () => {
       
        router.push('/');
    };



  return (
    <section className='w-screen h-auto bg-black min-h-[100vh]'>
      <button onClick={() => handleClick()} className=' z-40 fixed bg-[#3CB6C0] text-xl text-white rounded-full left-0 mt-24 m-8 p-5'><BiChevronLeft/></button>
      <NavBar title="React" />
      <div className='grid grid-cols-1 m-auto pb-6 min-h-[90vh] grid justify-center '>
        <div className='text-white pt-20 order-2 md:py-10 px-4 md:px-0 md:w-[90vw] md:m-auto max-w-[1100px] '>
          <h1 className='text-[2em] md:text-[3em] py-5 font-semibold'>{searchParams.title}</h1>
          <p className='text-white/50 text-center md:text-[1em] xl:pr-36 text-start xl:pb-10'>{searchParams.desc}</p>
          <div className='flex w-full justify-around items-center mt-5'>
            
            <a href={searchParams.link} target="_blank" rel="noopener noreferrer" className=' bg-[#3CB6C0] text-white uppercase w-full text-center px-10 py-3 rounded-md '>Play now</a>
          </div>

        </div>

        {/* carrocel */}
        <div className='relative scrollHidden grid overflow-scroll items-center h-[450px] xl:h-[600px]  w-screen'>
          <div style={{ transform: `translateX(-${curr * 100}vw)` }} className='order-1 flex  transition-transform ease-out duration-500'>

            {links.map((link, index) => (
              <div key={index} className='h-[600px] grid  '>
                <Image className=' object-contain rounded-xl min-w-[100vw] h-[600px]' width={1920} height={940} alt='image jogo' src={link}></Image>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 w-auto h-[150px] xl:w-screen flex items-center top-[250px] justify-between   px-4 xl:px-14">
          <button onClick={prev} className=" rounded-full shadow xl:w-50px xl:h-50px xl:bg-white/80 xl:text-black bg-black/90 text-white">
            <BiChevronLeft size={40} />
          </button>
          <button onClick={next} className=" rounded-full shadow xl:bg-white/80 xl:text-black bg-black/90 text-white">
            <BiChevronRight size={40} />
          </button>
        </div>

      </div>
      <div className='mt-20'>
        <div className='text-center w-[95vw] m-auto max-w-[1250px] text-white'>
          <h1 className='text-[3em] py-9 text-[#3CB6C0] font-semibold'>Discover the Gaming World: An Unforgettable Adventure</h1>
          <p className=' py-7 mb-[60px] text-start lg:text-center xl:px-24'>Embark on Epic Adventures: Explore Incredible Worlds and Dive into Thrilling Experiences! Come and Enjoy these Wonderful Games, Uncover Breathtaking Landscapes, Epic Challenges, and Captivating Stories that will Keep You Engaged from Start to Finish. Get Ready for an Unforgettable Experience as You Embark on Exciting Journeys and Delight in Stunning Graphics and Immersive Gameplay. Dont Waste Any More Time, Dive into this Adventure and Discover What the Gaming World has to Offer!</p>
        </div>
        <div className=' w-screen h-auto '>
          <div className='h-[auto] grid justify-center md:hidden '>
            <Image className=' object-cover aspect-[auto 502 / 894] rounded-xl w-[100vw] h-[auto]' width={750} height={1334} alt='image jogo' src={links[2]}></Image>

          </div>
          <div className='h-[auto] hidden md:grid'>
            <Image className=' object-cover  w-[100vw] h-[auto]   ' width={1920} height={940} alt='image jogo' src={links[1]}></Image>
          </div>
        </div>
        <div className=' w-screen h-auto '>
          <div className='h-[auto] grid justify-center md:hidden '>
            <Image className=' object-cover aspect-[auto 502 / 894] rounded-xl w-[100vw] h-[auto]' width={750} height={1334} alt='image jogo' src={links[3]}></Image>

          </div>
          <div className='h-[auto] hidden md:grid'>
            <Image className=' object-cover  w-[100vw] h-[auto]   ' width={1920} height={940} alt='image jogo' src={links[4]}></Image>
          </div>
        </div>
        <div className=' w-screen h-auto '>
          <div className='h-[auto] grid justify-center md:hidden '>
            <Image className=' object-cover aspect-[auto 502 / 894] rounded-xl w-[100vw] h-[auto]' width={750} height={1334} alt='image jogo' src={links[5]}></Image>
          </div>
          <div className='h-[auto] hidden md:grid'>
            <Image className=' object-cover  w-[100vw] h-[auto]   ' width={1920} height={940} alt='image jogo' src={links[6]}></Image>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Page;
