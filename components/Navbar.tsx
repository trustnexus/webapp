// import Link from "next/link";
// import React from "react";
// import { CiSearch } from "react-icons/ci";
// import { GrLanguage } from "react-icons/gr";
// import { FaArrowDown } from "react-icons/fa6";
// // import Carousal from "@/components/Carousal";

// const Navbar = () => {
//   return (
//     <div className="border-2 border-black bg-transparent absolute text-white top-0 z-100 flex  border-b-[1px] items-center justify-center w-full h-[70.83px] ">
//       <div className="flex px-10 items-center justify-between  w-[1320px] mx-auto h-[70px]">
//         <div className="flex items-center gap-3 ">
//           <div className="pr-7">
//             <Link className="text-xl italic no-underline text-white font-semibold" href={"/"}>
//               TrustNexus
//             </Link>
//           </div>
//           <div className="">
//           <ul className="flex items-center  my-auto justify-between gap-8">
//             <li className="cursor-pointer">Services 🔻</li>
//             <li className="cursor-pointer">Industries 🔻</li>
//             <li className="cursor-pointer">Insight 🔻</li>
//             <li className="cursor-pointer">About 🔻</li>
            
//           </ul>
//           </div>
//         </div>
//         <div className="h-[70px] flex items-center justify-center">
//           <ul className="flex items-center h-[70px] my-auto  gap-10">
//             <li className="cursor-pointer">Careers</li>
//             <li className="cursor-pointer">Investors 🔻</li>
//           </ul>
//           <div className="flex items-center justify-center">
//             <div className="border-gray-400 cursor-pointer m-3 border-[0.8px] w-[70px]  h-[70px] flex items-center justify-center ">
//               <CiSearch
//                 className="hover:scale-[1.5] transition-all duration-200 "
//                 size={20}
//               />
//             </div>
//             <div className="flex cursor-pointer items-center justify-center gap-1">
//               <GrLanguage />{" "}
//               <span className="flex items-center justify-center gap-1">
//                 PK <FaArrowDown />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <Carousal /> */}
//     </div>
//   );
// };

// export default Navbar;


// import Link from "next/link";
// import React from "react";
// import { CiSearch } from "react-icons/ci";
// import { GrLanguage } from "react-icons/gr";
// import { FaArrowDown } from "react-icons/fa6";

// const Navbar = () => {
//   return (
//     <div className="border-b border-white bg-transparent fixed top-0 w-full z-50 text-white">
//       <div className="max-w-[1320px] mx-auto w-full h-[70px] px-4 md:px-10 flex items-center justify-between">
//         {/* Left Section - Logo + Menu */}
//         <div className="flex items-center justify-between w-full lg:w-auto gap-3">
//           {/* Logo */}
//           <Link
//             className="text-xl sm:text-2xl italic font-semibold text-white"
//             href="/"
//           >
//             TrustNexus
//           </Link>

//           {/* Hamburger for Mobile */}
//           <div className="lg:hidden ml-auto">
//             <button className="text-xl">☰</button>
//           </div>

//           {/* Nav Links - Desktop Only */}
//           <ul className="hidden lg:flex items-center gap-8 ml-10">
//             <li className="cursor-pointer">Services 🔻</li>
//             <li className="cursor-pointer">Industries 🔻</li>
//             <li className="cursor-pointer">Insight 🔻</li>
//             <li className="cursor-pointer">About 🔻</li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="hidden lg:flex items-center gap-6">
//           <ul className="flex items-center gap-6">
//             <li className="cursor-pointer">Careers</li>
//             <li className="cursor-pointer">Investors 🔻</li>
//           </ul>

//           <div className="flex items-center gap-4 ml-4">
//             {/* Search */}
//             <div className="border border-gray-400 w-[40px] h-[40px] flex items-center justify-center">
//               <CiSearch
//                 className="hover:scale-[1.2] transition-all duration-200"
//                 size={18}
//               />
//             </div>

//             {/* Language Selector */}
//             <div className="flex items-center cursor-pointer gap-1 text-sm">
//               <GrLanguage />
//               <span className="flex items-center gap-1">
//                 PK <FaArrowDown size={10} />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b border-white bg-transparent fixed top-0 w-full z-50 text-white">
      <div className="max-w-[1320px] mx-auto w-full h-[70px] px-4 md:px-10 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-3">
          <Link
            className="text-xl sm:text-2xl italic font-semibold text-white"
            href="/"
          >
            TrustNexus
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center gap-4 lg:hidden ml-auto">
              <div className="border border-gray-400 w-[40px] h-[40px] flex items-center justify-center">
              <CiSearch className="hover:scale-[1.2] transition-all duration-200" size={18} />
            </div>
            <button
              className="text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex my-auto items-center gap-8 ml-10">
            <li className="cursor-pointer">Services 🔻</li>
            <li className="cursor-pointer">Industries 🔻</li>
            <li className="cursor-pointer">Insight 🔻</li>
            <li className="cursor-pointer">About 🔻</li>
          </ul>
        </div>

        {/* Right Section for Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center my-auto gap-6">
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Investors 🔻</li>
          </ul>

          <div className="flex items-center gap-4 ml-4">
            <div className="border border-gray-400 w-[40px] h-[40px] flex items-center justify-center">
              <CiSearch className="hover:scale-[1.2] transition-all duration-200" size={18} />
            </div>
            <div className="flex items-center cursor-pointer gap-1 text-sm">
              <GrLanguage />
              <span className="flex items-center gap-1">
                PK <FaArrowDown size={10} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔻 Mobile Menu - toggle based on state */}
      {menuOpen && (
        <div className="lg:hidden bg-black text-white px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li className="cursor-pointer">Services 🔻</li>
            <li className="cursor-pointer">Industries 🔻</li>
            <li className="cursor-pointer">Insight 🔻</li>
            <li className="cursor-pointer">About 🔻</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Investors 🔻</li>

                <div className="flex items-center cursor-pointer gap-1 text-sm">
              <GrLanguage />
              <span className="flex items-center gap-1">
                PK <FaArrowDown size={10} />
              </span>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
