"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/navBar';
import Image from 'next/image';

interface SlideImages {
  id: string;
  link: string;
}

interface AboutPageProps {
  searchParams: {
    id: number;
    src: string;
    title: string;
    link: string;
    desc: string;
    value: string;
    arrayLinks: string[]; // Certifique-se de que arrayLinks seja uma matriz de objetos com as chaves id e link
  };
}

const Page: React.FC<AboutPageProps> = ({ searchParams }) => {
  // Use useEffect para dividir a string de URLs quando o componente for montado
  useEffect(() => {
    // Dividindo a string de URLs em uma array de strings
    const linksArray = searchParams.arrayLinks.split(',');
    // Atualizando o estado com a array de URLs
    setLinks(linksArray);
  }, []);

  // Estado para armazenar as URLs
  const [links, setLinks] = useState<string[]>([]);

  return (
    <section className='w-screen h-auto bg-black min-h-[100vh]'>
      <NavBar title="React" />
      <button className='bg-red-500'>fseefse</button>
      <div className='grid grid-cols-1 m-auto pb-6'>
        <div className='text-white order-2 md:py-10 px-4 md:px-0 md:w-[90vw] md:m-auto max-w-[1100px]'>
          <h1 className='text-[2em] md:text-[3em] py-5'>{searchParams.title}</h1>
          <p className='text-white/50 md:text-[1em]'>{searchParams.desc}</p>
          <p className='my-10'>To obtain: {searchParams.value !== "Free" ? searchParams.value + "$" : searchParams.value}</p>
          <a href={searchParams.link} target="_blank" rel="noopener noreferrer" className=' bg-[#3CB6C0] text-white uppercase px-6 py-4 rounded-md '>To acquire</a>
        </div>
        <div className='order-1 overflow-hidden '>
          {/* Mapeando sobre as URLs armazenadas no estado */}
          {links.map((link, index) => (
            <div key={index}>
              <Image className=' w-[100vw] md:py-10 md:w-[90vw] m-auto max-w-[1100px] max-h-[600px]' width={400} height={0} alt='image jogo' src={link}></Image>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
