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
    <main className=" order-2  min-h-[100vh] md:h-[auto] md:order-1 grid place-items-center xl:grid-cols-2 xl:grid-cols-[55vw,30vw] grid-cols-1 w-full mx-auto xl:min-h-[400px] xl:my-20 md:max-w-[80vw] xl:max-w-[90vw] xl:items-start xl:gap-10 xl:h-[400px] overflow-hidden border border-black shadow-lg">
      <div
        className={`w-full xl:pr-[100px]  xl:w-[50vw] min-h-[auto] xl:min-h-[300px] flex justify-center lg:w-[80vw] items-start xl:items-center gap-4 transition-transform ease-in-out duration-500  xl:p-0`}
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
              className="w-screen h-[auto] bg-transparent  xl:w-[55vw] xl:max-w-[50vw] md:h-[auto] xl:w-[900px] xl:h-full  object-center object-center xl:object-scale-down  "
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