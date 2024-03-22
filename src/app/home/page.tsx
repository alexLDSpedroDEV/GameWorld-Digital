import React from "react";
import Slider from "../../components/Slider";
import NavBar from "@/components/navBar";

const Home = () => {
  return (
    <div id="portifolio" className=" bg-[#000]">
      <div>
      <NavBar title="React" />
        <Slider/>
        <div className="bg-bglogo h-[35px] w-full relative translate-y-[20px]"></div>
      </div>
    </div>
  );
};

export default Home;