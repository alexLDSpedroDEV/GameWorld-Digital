"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Description from "./Description";

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
}

const Slider: React.FC<CarrocelProps> = ({ sliders }) =>  {
  const [activeImage, setActiveImage] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [links, setLinks] = useState<any[]>([]);

  const clickNext = () => {
    if (sliders && sliders.length) {
      setActiveImage(activeImage === sliders.length - 1 ? 0 : activeImage + 1);
    }
  };

  const clickPrev = () => {
    if (sliders && sliders.length) {
      setActiveImage(activeImage === 0 ? sliders.length - 1 : activeImage - 1);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  },);

  useEffect(() => {
    const getWidth = () => {
      setWindowWidth(window.innerWidth)
    }

    getWidth(); // Chama getWidth() para definir o width inicial

    window.addEventListener('resize', getWidth); // Adiciona o ouvinte de redimensionamento da janela

    return () => {
      window.removeEventListener('resize', getWidth); // Remove o ouvinte de redimensionamento da janela ao desmontar
    };
  }, [])

  useEffect(() => {

    const linksArray = sliders.map((s) => s.arrayLinks[2]?.link);
    
   
    setLinks(linksArray)

  }, [sliders]);

  return (
    <main className="order-2 min-h-[100vh] md:h-[auto] md:order-1 grid place-items-center xl:grid-cols-2 xl:grid-cols-[55vw,30vw] grid-cols-1 w-full mx-auto xl:min-h-[400px] xl:my-20 md:max-w-[80vw] xl:max-w-[90vw] xl:items-start xl:gap-10 xl:h-[400px] overflow-hidden border border-black shadow-lg">
      <div className={`w-full xl:pr-[100px] xl:w-[50vw] min-h-[auto] xl:min-h-[300px] flex justify-center lg:w-[80vw] items-start xl:items-center gap-4 transition-transform ease-in-out duration-500 xl:p-0`}>
        {sliders && sliders.map((elem, idx) => (
          <div key={idx} className={`${idx === activeImage ? "block aspect-w-16 aspect-h-9 md:aspect-w-3 md:aspect-h-4 lg:ob transition-all duration-500 ease-in-out" : "hidden"}`}>
          <Image 
            src={ elem.src} 
            alt="" 
            width={400} 
            height={400} 
            className="w-screen h-[auto] bg-transparent xl:w-[55vw] xl:max-w-[50vw] md:h-[auto] xl:w-[900px] xl:h-full object-center object-center xl:object-scale-down" 
          />
       </div>
        ))}
      </div>
      <Description sliders={sliders} activeImage={activeImage} clickNext={clickNext} clickPrev={clickPrev} />
    </main>
  );
};

export default Slider;

