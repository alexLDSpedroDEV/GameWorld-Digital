import React from "react";
import { images } from "./constants";
import { stringify as formatUrl } from 'querystring';
import { motion } from "framer-motion";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
  sliders: Slide[];
};


interface Slider {

  "id": number;
  "src": string;
  "title": string;
  "link": string;
  "desc": string;
  "value": number;
  "arrayLinks": any[];
}

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



const Description = ({ activeImage, clickNext, clickPrev, sliders }: Props) => {

  const router = useRouter();

    // Dentro da função handleClick
    const handleClick = (data: Slider) => {
        console.log(data.arrayLinks);

        // Mapeia os links da array para uma nova array contendo apenas os links
        const arrayLinkshgg = data.arrayLinks.map(linkObj => linkObj.link);

        const queryParams = {
            id: data.id,
            src: data.src,
            title: data.title,
            link: data.link,
            desc: data.desc,
            value: data.value,
            // Converte a array de links para uma string separada por vírgulas
            arrayLinks: arrayLinkshgg.join(',')
        };

        const url = `/venda?${formatUrl(queryParams)}`;
        router.push(url);
    };




  return (
    <div className=" text-white grid place-items-start xl:w-[40vw]  xl:w-[400px] px-7 h-[500px]  xl:h-[450px] w-full  relative ">

      {sliders && sliders.map((elem, idx) => (
        <div
          key={idx}
          className={`${idx === activeImage
            ? "block xl:w-[40vw]  w-full h-[500px] xl:h-[300px]  text-left"
            : "hidden"
            }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-10 text-3xl md:text-4xl font-extrabold xl:text-2xl">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base xl:w-[487px] tracking-wide h-[300px] xl:h-[200px] sm:h-[200px] italic text-gray-600">
              {" "}
              {elem.desc}
            </div>
          </motion.div>
          <div className="grid grid-cols-2 xl:max-w-[450px]">    
            <div className=" flex sm:gap-5 gap-1  text-center justify-start items-center text-[0.8rem] sm:text-[1rem] w-[100%]">  
              <button onClick={() => handleClick(elem)} className="bg-[#3CB6C0] text-white uppercase px-4 py-2 rounded-md">
                purchase
              </button>              
            </div>
            <div className=" md:bottom-1  md:right-0 w-full flex justify-end sm:pr-5 pr-0 items-center gap-3">
              <div
                className=" bottom-2 right-10 cursor-pointer"
                onClick={clickPrev}
              >
                <IoArrowBackOutline />
              </div>
              

              <div
                className=" bottom-2 right-2 cursor-pointer"
                onClick={clickNext}
              >
                <GrLinkNext />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;