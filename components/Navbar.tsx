"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b   hover:backdrop-blur-lg bg-gray-500 hover:transition-all duration-200 ease-in-out cursor-pointer border-gray-500  fixed top-0 w-full z-50 text-white">
      <div className="max-w-[1320px] mx-auto w-full h-[70px] px-4 md:px-10 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-3">
          <Link
            className="text-xl sm:text-2xl underline-no italic font-semibold text-white"
            href="/"
          >
            TrustNexus
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center gap-4 lg:hidden ml-auto">
            <div className="border border-gray-400 w-[40px] h-[40px] flex items-center justify-center">
              <CiSearch
                className="hover:scale-[1.2] transition-all duration-200"
                size={18}
              />
            </div>

            {/* Toggle Button (Hamburger ↔ Cross) */}
            <button
              className="text-4xl font-bold focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <IoClose  size={23}/> : <RxHamburgerMenu size={23}/>}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex my-auto items-center gap-8 ml-10">
            <li className="cursor-pointer flex items-center gap-1">Services  <TiArrowSortedDown/></li>
            <li className="cursor-pointer flex items-center gap-1">Industries <TiArrowSortedDown/></li>
            <li className="cursor-pointer flex items-center gap-1">Insight <TiArrowSortedDown/></li>
            <li className="cursor-pointer flex items-center gap-1">About <TiArrowSortedDown/></li>
          </ul>
        </div>

        {/* Right Section for Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center my-auto gap-6">
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer flex items-center gap-1">Investors <TiArrowSortedDown/></li>
          </ul>

          <div className="flex items-center gap-4 ml-4">
            <div className="border border-gray-400 w-[40px] h-[40px] flex items-center justify-center">
              <CiSearch
                className="hover:scale-[1.2] transition-all duration-200"
                size={18}
              />
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
        <div className="lg:hidden bg-black/90 backdrop-blur text-white px-6 py-4 fixed top-[70px] left-0 w-full -z-[9999]">
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
