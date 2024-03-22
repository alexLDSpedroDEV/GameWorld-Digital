"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/../../public/images/logo.png';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { MdHomeRepairService } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { RiContactsFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";



interface MyProps {
    title: string;
}

const NavBar = (props: MyProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className='z-1 grid grid-row-2 justify-between w-screen sm:min-h-[100px] items-center'>
            

           
            <div className=' grid-cols-2 hidden md:grid justify-center w-screen md:min-h-[100px]  lg:text-[0.9rem] xl:text-[1.1rem] md:text-[0.7rem] sm:text-[0.7rem]'>
                <div className='flex justify-start items-center pl-5 gap-5 text-gray-500 md:text-[1rem] cursor-pointer' >
                    <Image src={logo} width={100} height={100} alt='logo do site'></Image>
                    <a className=' hover:text-[#3CB6C0]'> Home </a>
                    <a className=' hover:text-[#3CB6C0]'> Populares </a>
                    <a className=' hover:text-[#3CB6C0]'> Sujestão </a>
                    <a className=' hover:text-[#3CB6C0]'> Jogos </a>
                </div>
                <div className=' hidden md:flex text-gray-500 gap-4  pr-7 justify-end text-center items-center mr-4 md:text-[1rem]'>
                    <a href=''  className='font-bold hover:text-[#3CB6C0]'><HiOutlineBellAlert /></a>
                    <a href=''  className='font-bold hover:text-[#3CB6C0] uppercase'><FaShoppingCart/></a>
                </div>
            </div>

            <div className=' md:hidden grid-cols-2 grid justify-center w-screen md:min-h-[100px]  lg:text-[0.9rem] xl:text-[1.1rem] md:text-[0.7rem] sm:text-[0.7rem]'>
                <div className='flex justify-start items-center pl-5 gap-5 text-gray-500 md:text-[1rem]' >
                    <Image src={logo} width={100} height={100} alt='logo do site'></Image>             
                </div>
                <div className='flex text-gray-500 gap-4  pr-7 justify-end text-center items-center mr-4 text-[2rem]'>
                    <div className='font-bold hover:text-textlogo' onClick={() => setIsOpen(true)}><CiMenuBurger /></div>
                </div>
            </div>
             
            
            {/* Links de navegação */}
            {isOpen && (
                <div className='md:hidden animation bg-black text-white pt-[140px] sm:pt-[150px] pl-8 relative top-[-200px] w-[100vw] h-[calc(100vh+24px)] bg-black'>
                    <ul className='mt-2 '>
                        <li className='flex gap-5 h-[50px] text-[20px] items-center'>
                            <IoMdHome className='text-[30px]'/> 
                            <a className='#' href='#' onClick={() => setIsOpen(false)}> Home</a>
                        </li>
                        <li className='flex gap-5 h-[50px] text-[20px] items-center'>
                            <MdHomeRepairService  className='text-[30px]'/> 
                            <a className='#About' href='#About' onClick={() => setIsOpen(false)}> Populares</a>
                        </li>
                        <li className='flex gap-5 h-[50px] text-[20px] items-center'>
                            <IoMdHome className='text-[30px]'/> 
                            <a className='#job' href='#job' onClick={() => setIsOpen(false)}> Sujestão</a>
                        </li>
                        <li className='flex gap-5 h-[50px] text-[20px] items-center'>
                            <MdOutlineWork className='text-[30px]'/> 
                            <a className='#portifolio' href='#portifolio' onClick={() => setIsOpen(false)}> Jogos</a>
                        </li>
                    </ul>
                    <div className='w-[80vw] h-[60px] my-8 items-center grid justify-center  '>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='p-3 text-[30px] text-white hover:text-gray-300 focus:outline-none'
                    >
                        <IoMdClose />
                    </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;