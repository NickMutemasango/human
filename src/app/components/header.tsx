"use client";
// import React from 'react'
// import Image from 'next/image'
// import Facebook from '../../../public/images/facebook.svg'
// import Instagram from '../../../public/images/instagram.svg'
// import Twitter from '../../../public/images/twitter.svg'
// import Logo from '../../../public/images/logo.svg'
// import Link from 'next/link'
// import { HiArrowNarrowRight } from 'react-icons/hi';

// const header = () => {
//   return (
//     <div className='flex flex-col bg-transparent  absolute w-[100%]'>
//       <div className='flex justify-between lg:px-10  py-[8px] items-center w-full'>
//         <p className='text-xs text-white'>123 Street, Harare, Zimbabwe</p>
//         <div className='flex justify-end gap-5'>
//           <Image src={Facebook} alt=""  className='w-[15%]'/>
//           <Image src={Instagram} alt=""  className='w-[15%]'/>
//           <Image src={Twitter} alt=""  className='w-[15%]'/>
//         </div>
//       </div>
//       <hr />
//       <div className='flex justify-between lg:px-10  py-[8px]'>
//         <Image src={Logo} alt="" className='w-[15%]' />
//         <div className='flex text-white space-x-7'>
//           <Link href='/'>Home</Link>
//           <Link href='/about'>About</Link>
//           <Link href='/causes'>Causes</Link>
//           <Link href='/pages'>Pages</Link>
//           <Link href='/contact'>Contact</Link>
//           <button className='border border-orange px-3 py-1 rounded-md flex justify-center items-center gap-2'>Donate Now <div className='bg-white h-5 rounded-full w-5 flex justify-center items-center'>
//             <HiArrowNarrowRight className='text-orange' />
//             </div></button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default header

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";

import Facebook from "../../../public/images/facebook.svg";
import Instagram from "../../../public/images/instagram.svg";
import Twitter from "../../../public/images/twitter.svg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex flex-col bg-transparent  absolute w-[100%] z-50">
      <div className="flex justify-between lg:px-10 px-3 py-[8px] items-center w-full">
        <p className="text-xs text-white">123 Street, Harare, Zimbabwe</p>
        <div className="flex justify-end gap-5">
          {" "}
          <Image src={Facebook} alt="" className="w-[15%]" />
          <Image src={Instagram} alt="" className="w-[15%]" />
          <Image src={Twitter} alt="" className="w-[15%]" />
        </div>
      </div>
      <hr />
      <div className="flex justify-between lg:px-10  py-[8px] px-3">
        {/* Logo */}

        <Image src={Logo} alt="" className="w-[35%] lg:w-[15%]" />

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            onClick={toggleMenu}
            className="cursor-pointer text-white"
          />
        </div>

        {/* Menu Links */}
        <div
          className={`space-x-3 font-normal text-[#4D4D4D] lg:text-white  md:items-center hidden md:flex`}
        >
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Causes</Link>
          <Link href="#">Pages</Link>
          <Link href="#">Contact</Link>
          <div className="flex justify-center cursor-pointer items-center gap-2 rounded-md border-orange border px-2 py-1">
              Donate Now{" "}
              <div className="bg-transparent h-5 rounded-full w-5 flex justify-center items-center">
                <div className="bg-white h-5 w-5 flex justify-center items-center rounded-full">
                  <HiArrowNarrowRight className="text-orange" />
                </div>
              </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[10vh] left-0 w-full bg-[#FFF7ED] flex flex-col items-center  space-y-4 py-4 md:hidden z-10 shadow-lg">
            <Link href="#" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#" onClick={toggleMenu}>
              Causes
            </Link>
            <Link href="#" onClick={toggleMenu}>
              Pages
            </Link>
            <Link href="#" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex justify-center cursor-pointer rounded-md items-center gap-2 border-orange border px-2 py-1">
              Donate Now{" "}
              <div className="bg-transparent h-5 rounded-full w-5 flex justify-center items-center">
                <div className="bg-white h-5 w-5 flex justify-center items-center rounded-full">
                  <HiArrowNarrowRight className="text-orange" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// "use client";
// import React from "react";
// import Image from "next/image";
// import Facebook from "../../../public/images/facebook.svg";
// import Instagram from "../../../public/images/instagram.svg";
// import Twitter from "../../../public/images/twitter.svg";
// import Logo from "../../../public/images/logo.svg";
// import Link from "next/link";
// import { HiArrowNarrowRight } from "react-icons/hi";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="flex flex-col bg-transparent absolute w-[100%] z-10">
//       {/* Top bar */}
//       <div className="flex justify-between px-3 lg:px-10 py-[8px] items-center w-full">
//         <p className="text-xs text-white">123 Street, Harare, Zimbabwe</p>
//         <div className="flex justify-end gap-3 lg:gap-5">
//           <Image src={Facebook} alt="" className="w-4 lg:w-[15%]" />
//           <Image src={Instagram} alt="" className="w-4 lg:w-[15%]" />
//           <Image src={Twitter} alt="" className="w-4 lg:w-[15%]" />
//         </div>
//       </div>
//       <hr />

//       {/* Main header */}
//       <div className="flex justify-between px-3 lg:px-10 py-[8px] items-center">
//         <Image src={Logo} alt="" className="w-[45%] lg:w-[15%]" />

//         {/* Menu */}
//         <div
//           className={`
//           ${menuOpen ? "flex" : "hidden"}
//           lg:flex flex-col lg:flex-row text-white items-center space-y-4 lg:space-y-0 lg:space-x-7 absolute lg:relative bg-gray-900 lg:bg-transparent  left-0 w-full lg:w-auto p-4 lg:p-0 z-10`}
//         >
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/causes">Causes</Link>
//           <Link href="/pages">Pages</Link>
//           <Link href="/contact">Contact</Link>
//           <button className="border border-orange px-3 py-1 rounded-md flex justify-center items-center gap-2">
//             Donate Now
//             <div className="bg-white h-5 rounded-full w-5 flex justify-center items-center">
//               <HiArrowNarrowRight className="text-orange" />
//             </div>
//           </button>
//         </div>

//         {/* Hamburger Icon for mobile */}
//         <div
//           className="lg:hidden text-white text-2xl cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
