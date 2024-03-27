"use client"

import React from "react";
import CarrocelComponts from "@/components/carrocel";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 

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
  link: String
}

interface PropsData {
  title: string
}

const MaisVendidos = (props: PropsData) => {

  const router = useRouter();

    const handlesClick = () => {
        console.log("placing ypor order");
        router.push("banner/page")
    }

  const slide: Slide[] = [
    {
      id: 0,
      src: "/popular/image1.jpg",
      title: "Counter-strike 2",
      link: "Empresa",
      desc: "Prince of Persia: The Lost Crown is an action-adventure game developed and published by Ubisoft, part of Prince of Persia series. It was released for Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One and Xbox Series X/S on 18 January 2024, and received positive reviews from critics.",
      value: 200,
      arrayLinks: [
        { id: "0", link: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1698860631" },
        { id: "1", link: "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_ef82850f036dac5772cb07dbc2d1116ea13eb163.600x338.jpg?t=1698860631" },
        { id: '2', link: "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_76f6730dbb911650ba1f41c8e5b4bac638b5beea.600x338.jpg?t=1698860631" },
        { id: '3', link: "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_808cdd373d78c3cf3a78e7026ebb1a15895e0670.600x338.jpg?t=1698860631" },
        { id: "4", link: "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_ef98db5d5a4d877531a5567df082b0fb62d75c80.600x338.jpg?t=1698860631" },
        { id: '5', link: "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_63d2733b9b4ace01a41d5ba8afd653245d05d54a.600x338.jpg?t=1698860631" },
      ]

    },
    {
      id: 1,
      src: "/popular/image2.jpg",
      title: "Valorant",
      link: "Valorant",
      desc: "Valorant",
      value: 200,
      arrayLinks: [
        { id: "0", link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png" },
        { id: "1", link: "https://playvalorant.com/pt-br/news/game-updates/notas-da-atualizacao-8-05-do-valorant/" },
        { id: "2", link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6664cd110092d0a3/5ebf2bee97b46c1911ad021b/Media_Header_780x462_.jpg" },
        { id: "3", link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte8963f2e2d64c158/64223b04c8e64e0404191fdc/Gekko_Dark_1.jpg?format=jpg&auto=webp&quot;" },
        { id: "4", link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcab091e37632e83d/6350404cd27c4a22ea5bcaf9/3_NightMode_Harbor_thmb.jpg?format=jpg&auto=webp&quot;" },
        { id: "5", link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blteff6964bb1f09ec6/5fd176537c43e43bf419658c/VALORANT_Jett_Dark_thumbnail.jpg?format=jpg&auto=webp&quot;" },
      ]
    },
    
    {
      id: 2,
      src: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ztPgUkdmO6iUiVwDX6U05/dc6e400f119afcb09ca91be5ea741251/r6s_stories_deepfreeze.jpg",
      title: "Rainbow Six Siege",
      link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege",
      desc: "Rainbow Six Siege - Tom Clancy's Rainbow Six Siege offers a tactical and team-oriented approach to first-person shooters, emphasizing strategy and cooperation above all else. Set in a world of counter-terrorism operations, Siege pits attackers against defenders in intense, close-quarters combat scenarios. With its destructible environments, operator-based gameplay, and constant updates, Rainbow Six Siege continues to evolve and captivate players with its depth and complexity.",
      value: 200,
      arrayLinks: [
        { id: "0", link: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2fkXvEoImyfonefSiBlTyG/b3ff915724cd434536e701b5e45edfd2/Y9S1_Narratives_pages.jpg" },
        { id: "1", link: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ztPgUkdmO6iUiVwDX6U05/dc6e400f119afcb09ca91be5ea741251/r6s_stories_deepfreeze.jpg" },
        { id: "2", link: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5TESMMzlNqQ9KDqyyHvhIR/732df7f4f1c5a77f010f3fef2a6c42f8/r6s_stories_heavymettle.jpg" },
        { id: "3", link: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5TESMMzlNqQ9KDqyyHvhIR/732df7f4f1c5a77f010f3fef2a6c42f8/r6s_stories_heavymettle.jpg" },
        { id: "4", link: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4sDf67hHPzBMDYQijzvRgg/d72d0e3b42780640bc81fd4bf39748f4/Y8S2-Fenrir-Cover.jpg" },
        { id: "5", link: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6qDKqlJCBdrSqFx1YcMXlE/f420f44e6502bbcaa953c98647cbe3c3/Y7S3_Grim_Cover_Final.jpg" },
      ]
    },
   
    {
      id: 3,
      src: "https://image.api.playstation.com/cdn/EP0006/CUSA04013_00/4bI5D3WvesQPmegKpGINAimOsS27D688.png",
      title: "Titanfall® 2",
      link: "https://store.steampowered.com/app/1237970/Titanfall_2/",
      desc: "Titanfall 2 combines fast-paced first-person shooter action with the awe-inspiring spectacle of giant mechanized Titans, resulting in an exhilarating gameplay experience. Set in a futuristic universe where pilots and Titans clash on the battlefield, Titanfall 2 delivers a thrilling single-player campaign filled with memorable moments and a multiplayer mode that seamlessly integrates pilot and Titan combat.",
      value: 200,
      arrayLinks: [
        { id: "0", link: "https://cdn.akamai.steamstatic.com/steam/apps/1237970/ss_f4a8464ce43962b76fa6f2156b341eee28ad6494.600x338.jpg?t=1668565264" },
        { id: "1", link: "https://cdn.akamai.steamstatic.com/steam/apps/1237970/ss_9ed56a85aef47554156999dfbd4091d225da2a47.600x338.jpg?t=1668565264" },
        { id: "2", link: "https://cdn.akamai.steamstatic.com/steam/apps/1237970/ss_f4a8464ce43962b76fa6f2156b341eee28ad6494.116x65.jpg?t=1668565264" },
        { id: "3", link: "https://cdn.akamai.steamstatic.com/steam/apps/1237970/ss_f4a8464ce43962b76fa6f2156b341eee28ad6494.116x65.jpg?t=1668565264" },
        { id: "4", link: "https://cdn.akamai.steamstatic.com/steam/apps/1237970/ss_f4a8464ce43962b76fa6f2156b341eee28ad6494.116x65.jpg?t=1668565264" },
        { id: "5", link: "https://cdn.akamai.steamstatic.com/steam/apps/1237970/ss_9e89b335e17df4e5049ffd30a558ddf50a8e36af.600x338.jpg?t=1668565264" },
      ]
    },
    {
      id: 4,
      src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1qPUrBYkf4bUJu5YqDI14TgKX3fVLgklM2JSsJ7moKTe9mhbBk9REWV19oReuJWdiwN7r",
      title: "Destiny 2",
      link: "https://store.steampowered.com/app/1085660/Destiny_2/",
      desc: "Destiny 2 blends the fast-paced action of a first-person shooter with the depth and progression of a massively multiplayer online game, set in a vast and mysterious sci-fi universe. Players assume the role of Guardians, defenders of humanity tasked with exploring alien worlds, battling formidable foes, and uncovering the secrets of the Traveler. With its immersive world, diverse activities, and addictive loot chase, Destiny 2 offers a rich and rewarding gameplay experience for solo players and groups alike.",
      value: 200,
      arrayLinks: [
        { id: "0", link: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/ss_7fcc82f468fcf8278c7ffa95cebf949bfc6845fc.600x338.jpg?t=1710538394" },
        { id: "1", link: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/ss_a9642404e586be28f856e8f02d038828f691a5ba.600x338.jpg?t=1710538394" },
        { id: "2", link: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/ss_a9642404e586be28f856e8f02d038828f691a5ba.116x65.jpg?t=1710538394" },
        { id: "3", link: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/ss_01fdd090ed1dd70112ce2c6d6fc208df0a008ac7.116x65.jpg?t=1710538394" },
        { id: "4", link: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/ss_a9642404e586be28f856e8f02d038828f691a5ba.116x65.jpg?t=1710538394" },
        { id: "5", link: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/ss_a35aaa73e605c0738a53a74abbcb53768e8f39e1.600x338.jpg?t=1710538394" },
      ]
    },
    
    {
      id: 1,
      src: "https://m.media-amazon.com/images/I/91keHwoCTAL._AC_UF1000,1000_QL80_.jpg",
      title: "Far Cry® 5",
      link: "https://store.steampowered.com/app/552520/Far_Cry_5/",
      desc: "Discover the open world of Hope County, Montana, besieged by a fanatical doomsday cult. Dive into the action solo or two-player co-op in the story campaign, use a vast arsenal of weapons and allies, and free Hope County from Joseph Seed and his cult.",
      value: 200,
      arrayLinks: [
        { id: "0", link: "https://cdn.akamai.steamstatic.com/steam/apps/552520/header.jpg?t=1694554810" },
        { id: "1", link: "https://cdn.akamai.steamstatic.com/steam/apps/552520/ss_a52c732d62a26d20bcfb0525929178749392f4fc.600x338.jpg?t=1694554810" },
        { id: "2", link: "https://cdn.akamai.steamstatic.com/steam/apps/552520/ss_5b5701cb9cc39b661d6a2903a97e0bb75eb2a6c6.600x338.jpg?t=1694554810" },
        { id: "3", link: "https://cdn.akamai.steamstatic.com/steam/apps/552520/ss_60894d685a0f3488ceaf0592625fc904aa2bfeb1.600x338.jpg?t=1694554810" },
        { id: "4", link: "https://cdn.akamai.steamstatic.com/steam/apps/552520/ss_8f826d6b68fc53c48f1f52f9d5188ba998b23534.600x338.jpg?t=1694554810" },
        { id: "5", link: "https://cdn.akamai.steamstatic.com/steam/apps/552520/ss_d578dc6a657d7aa5530e59e88705794696e92102.600x338.jpg?t=1694554810" },
      ]
    },
    

  ]


  return (
    <section className=" bg-black grid justify-center  grid mt-4  m-auto w-screen h-[600px]">
      <div className=" xl:max-w-[1200px] w-auto overflow-hidden">
        <div className="text-[2em] mb-10 pl-5 font-bold text-white ">{props.title}</div>
        <CarrocelComponts sliders={slide}/>
      </div>
    </section>
  );
};

export default MaisVendidos;
