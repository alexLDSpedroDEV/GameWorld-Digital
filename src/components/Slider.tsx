"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "./constants";
import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage]);
  return (
    <main className=" order-2  min-h-[300px] md:h-[600px] md:order-1 grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto xl:max-w-5xl ">
      <div
        className={`w-full xl:pr-[100px]  md:w-[50vw] min-h-[300px] md:min-h-[400px] flex justify-center items-center gap-4 transition-transform ease-in-out duration-500  md:p-0`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block  aspect-w-16 aspect-h-9 md:aspect-w-3 md:aspect-h-4 lg:ob transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <Image
              src={elem.src}
              alt=""
              width={400}
              height={400}
              className="w-screen h-[auto] bg-transparent  md:w-[50vw] md:max-w-[50vw] md:h-[auto] xl:w-[900px] xl:h-full  object-cover object-center xl:object-scale-down  "
            />
          </div>
        ))}
      </div>
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </main>
  );
};

export default Slider;