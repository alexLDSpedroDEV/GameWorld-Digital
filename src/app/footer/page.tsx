import React from "react";
import logo from '@/../image/logo2.png'
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <footer className=" grid justify-center w-screen bg-black">
            <div className="w-screen grid grid gap-7 max-w-[1200px] justify-center items-start h-[auto] pt-20 bg-black ">
                <div className="grid grid-cols-2 xl:w-[1200px] w-full justify-center items-center m-auto">
                        <div className="grid justify-center">
                            <Image className='w-[100px] w-[200px]' src={logo} alt='Logo site' ></Image>
                        </div>
                        <div className="w-auto h-[1px] bg-bglogo"></div>
                    </div>
                <div className="grid grid-cols-1 lg:grid-cols-2  justify-between xl:m-auto items-center xl:w-[1200px]">
                    <div className=" grid grid-cols-2 grid-rows-1  min-h-[200px] py-14 px-4 h-full text-white w-full ">
                        <div className="grid grid-cols-1 w-auto gap-3">
                            <h1 className="uppercase text-textlogo text-[18px] font-bold">menu</h1>
                            <a href="#" className="text-gray-400 cursor-pointer">Home</a>
                            <a href="#About" className="text-gray-400 cursor-pointer">Quem sou</a>
                            <a href="#job" className="text-gray-400 cursor-pointer">O que faço?</a>
                            <a href="#portifolio" className="text-gray-400 cursor-pointer">Portifólio</a>
                            <a href="#contatos" className="text-gray-400 cursor-pointer">Contato</a>
                        </div>
                        <div className="grid grid-cols-1 w-auto gap-0">
                            <h1 className="uppercase text-textlogo text-[18px] font-bold">REDES SOCIAIS</h1>
                            <a href="https://www.instagram.com/alexpedro_dev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 cursor-pointer ">Instagram</a>
                            <a href="https://www.linkedin.com/in/alexldspedro/" target="_blank" rel="noopener noreferrer" className="text-gray-400 cursor-pointer">LinkedIn</a>
                            <a href="https://github.com/alexLDSpedroDEV" target="_blank" rel="noopener noreferrer" className="text-gray-400 cursor-pointer">GitHub</a>
                        </div>
                    </div>
                    <div className="text-white grid grid-cols-1 lg:grid-cols-1 pl-4 lg:px-10 items-center">
                        <div className='flex '>
                            <h1 className=' text-[20px] md:text-[0.7rem] pr-4 pb-5 cursor-pointer grid'> <BsFillTelephoneFill   className="text-textlogo text-[25px]"/></h1>
                            <h1 className=' hidden text-lg sm:text-[0.8rem]'>Telefone Para Contato</h1>
                            <h3 className=' text-lg font-bold sm:text-[0.8rem] md:text-[1rem]'>19 982092481</h3>
                        </div>
                        <div className=' flex  '>
                            <h1 className=' text-[20px] md:text-[0.7rem] pr-4  cursor-pointer'> <MdEmail  className="text-textlogo text-[25px]"/></h1>
                            <h1 className='  hidden text-lg sm:text-[0.8rem]'>Email Para Contato</h1>
                            <h3 className='  font-bold sm:text-[0.8rem] md:text-[1rem]'>AlexLopes_pedro@hotmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className="w-screen py-8 bg-bglogo text-center text-gray-700">Copyright © 2024 AlexPedro Dev</div>
            </div>
        </footer>
    );
};

export default Footer;