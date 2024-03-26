import NavBar from '@/components/navBar';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

interface AboutPageProps {
  searchParams: {
    "id": number;
    "src": string;
    "title": string;
    "link": string;
    "desc": string;
    "value": string;
  }
}
interface SlideImages {

  "id": number,
  "link": string,

}

const slideImages: SlideImages[] = [
  {
    id: 0,

    link: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt84ca46ba2606a5ed/6504ca8bf50ed52bc6eb1cc8/Heroes.jpg?format=webply&quality=90",

  },
  {
    id: 1,
    link: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt160529f9e3f729fa/6504ca8bf6e275314995fd1c/F2P.jpg?format=webply&quality=100",
  },
  
  {
    id: 1,
    link: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt30aabe1c0e164812/6504ca8b0d91ee465b55006b/Action.jpg?format=webply&quality=100",
  },

]

import React from 'react';

const Page = ({ searchParams }: AboutPageProps) => {


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
        <div className='order-1 overflow-hidden '>
          {/* {slideImages.map((s, index) => (
            <div key={index}>
              <Image className=' ' width={400} height={0} alt='image jogo' src={s.link}></Image>
            </div>
          ))} */}
          <Image className=' w-[100vw] md:py-10 md:w-[90vw] m-auto max-w-[1100px] max-h-[600px]' width={400} height={0} alt='image jogo' src={searchParams.src}></Image>
        </div>
      </div>
    </section>
  );
}

export default Page;
