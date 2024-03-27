import React from "react";
import Slider from "../../components/Slider";
import NavBar from "@/components/navBar";
import { images } from "@/components/constants";

const Home = () => {
  return (
    <div id="portifolio" className=" bg-[#000]">
      <div>
        <NavBar title="React" />
        <Slider sliders={ images }/>
      </div>
    </div>
  );
};

export default Home;