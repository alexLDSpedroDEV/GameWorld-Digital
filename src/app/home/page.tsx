import React from "react";
import Slider from "../../components/Slider";
import NavBar from "@/components/navBar";

const Home = () => {
  return (
    <div id="portifolio" className=" bg-[#000]">
      <div>
      <NavBar title="React" />
        <Slider/>
      </div>
    </div>
  );
};

export default Home;