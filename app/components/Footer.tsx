import React from 'react'

import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaAngellist } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <div className=" w-full flex justify-center items-center h-15 text-white">
         <div className="  w-full  gap-10   items-center justify-center flex ">
                <ul className=" flex gap-5  ">
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
               <div className='flex flex-col items-center md:flex-row md:gap-2 '>
                <p className='text-sm'>
                Copyright © 2025 
                </p>
               
                <h1 className='font-bold text-md'> Nathnael Asefa</h1>
               </div>
              
              </div>
    </div>
  );
}

export default Footer