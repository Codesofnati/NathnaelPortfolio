import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaAngellist } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
const DashBoard = () => {
  return (
     <div className=" mt-26 w-full pl-15 gap-15  pr-10 items-center justify-between md:flex lg:pr-0  md:items-center ">
             <ul className=" flex gap-5 mb-3 md:flex-col">
               <li>
                 <FiGithub size={25} />
               </li>
               <li>
                 <LuLinkedin size={25} />
               </li>
               <li>
                 <FaAngellist size={25} />
               </li>
               <li>
                 <CiTwitter size={25} />
               </li>
               <li>
                 <FaMedium size={25} />
               </li>
             </ul>
             <div className=" flex flex-col gap-3 max-w-[800px]  md:max-w-[700px] lg:max-w-[1000px] ">
               <h1 className="font-semibold text-5xl md:text-5xl lg:text-6xl text-orange-500">
                 Hi, I&apos;m Nathnael
               </h1>
               <p className=" text-3xl md:text-3xl lg:text-4xl">
                 I&apos;m a Software Developer
               </p>
               <p className=" max-w-[820px] md:max-w-[820px] lg:max-w-[600px] text-lg md:text-xl leading-[1.6]">
                 I&apos;m looking for a fast-growing technology company or startup to
                 which I can help and contribute as a front-end developer, back-end
                 developer, or full-stack developer. I would love to learn about
                 your company, feel free to connect with me!
               </p>
               <button className="  bg-orange-500  text-white py-2 max-w-[200px] rounded-md ">
                 <Link href="#contact">Contact me</Link>
               </button>
             </div>
             <div className="pr-6 m-2 hidden lg:block ">
               <Image
                 src="/nat.png"
                 alt="mnb"
                 width={370}
                 height={370}
                 className="rounded-es-full "
               />
             </div>
           </div>
  )
}

export default DashBoard