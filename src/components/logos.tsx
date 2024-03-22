//icons linguagen de programação
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { IconType } from 'react-icons/lib';

interface logos {
    name: string,
    cor: string,
    icon: any,
    id: string
}

export const Logos: logos[] = [
    {
        name: "react",
        cor: "bg-blue-500",
        icon: "FaReact",
        id: "6"
    },
    {
        name: "Mongodb",
        cor: "bg-green-800",
        icon: "DiMongodb",
        id: "1"
    },
    {
        name: "typescript",
        cor: "bg-blue-800",
        icon: "SiTypescript",
        id: "4"
    },
    {
        name: "next",
        cor: "bg-black",
        icon: "SiNextdotjs",
        id: "4"
    },
    {
        name: "node",
        cor: "bg-green-500",
        icon: "FaNodeJs",
        id: "7"
    },
    {
        name: "javascript",
        cor: "bg-yellow-500",
        icon: "DiJavascript",
        id: "3"
    },

    {
        name: "tailwind",
        cor: "bg-blue-600",
        icon: "BiLogoTailwindCss",
        id: "8"
    },
    {
        name: "css",
        cor: "bg-blue-600",
        icon: "FaCss3Alt",
        id: "5"
    },
    {
        name: "html",
        cor: "bg-orange-600",
        icon: "IoLogoHtml5",
        id: "2"
    },
    {
        name: "Bootstrap",
        cor: "bg-purple-600",
        icon: "BsBootstrapFill",
        id: "9"
    },


]
export const iconMapping: { [key: string]: React.ElementType } = {
    IoLogoHtml5,
    DiMongodb,
    DiJavascript,
    SiTypescript,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    BsBootstrapFill,
    BiLogoTailwindCss,
    SiNextdotjs
};
