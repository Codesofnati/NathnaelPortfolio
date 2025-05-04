'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci"


const NavBar = () => {
  const [nav, setNav]= useState<boolean>(false)

  const handleNav = () => {
    setNav(!nav);
    
  };
  

  return (
    <header className=" bg-inherit  fixed w-full  flex items-center shadow-lg">
      <div className="  flex w-full items-center h-full justify-between  ">
        <Link href="#dashbord">
        
        <div className="hover:shadow-gray-400 hover:shadow-sm md:w-40 p-3  h-full rounded-md flex items-center justify-center">
        
          <Image
            src="/nat.png"
            alt="logo"
            width={65}
            height={70}
            className="rounded-4xl "
          />
        </div></Link>
        <div className="hidden md:flex gap-10 mr-15 ">
          <Link href="#projects" className="nav-link">
            Projects
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#skills" className="nav-link">
            Skills
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </div>

        <button className="mr-5 md:hidden " onClick={handleNav}>
        <CiMenuFries size={25}/>
      </button>

      
      </div>
      {nav && (

        <div className=" md:hidden bg-inherit w-full absolute top-20 left-50  mx-20 flex flex-col gap-1 p-3 ">
            <Link onClick={handleNav} href="#projects" className="nav-link">
              Projects
            </Link>
            <Link onClick={handleNav} href="#about" className="nav-link">
              About
            </Link>
            <Link onClick={handleNav} href="#skills" className="nav-link">
              Skills
            </Link>
            <Link onClick={handleNav} href="#contact" className="nav-link">
              Contact
            </Link>
          </div>
      
      )}
     
    </header>
  );
};

export default NavBar;
