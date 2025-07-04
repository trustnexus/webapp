"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import Services from "./NavComponents/Services";
import Industries from "./NavComponents/Industries";
import Insight from "./NavComponents/Insight";
import About from "./NavComponents/About";
import Investor from "./NavComponents/Investor";
import useAppStore from "@/store/store";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { hovered, setHovered } = useAppStore();

  // ref for detecting outside clicks
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setHovered("");
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setHovered]);
  return (
    <>
      <div
        onClick={()=>handleClickOutside}
        className="border-b hover:bg-gray-700 hover:transition-all hover:duration-200 ease-in-out fixed top-0 w-full z-50 text-white border-gray-500 bg-transparent"
      >
        <div className="max-w-[1320px] mx-auto w-full h-[70px] px-4 md:px-10 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center w-full lg:w-auto gap-3">
            {/* Hamburger (moved to left in mobile view) */}
            <div className="flex lg:hidden my-auto items-center gap-2">
              <button
                className="text-2xl focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <RxHamburgerMenu size={23} />
              </button>
            </div>

            {/* Logo */}
            <Link
              style={{ textDecoration: "none" }}
              className="text-xl sm:text-2xl italic font-semibold text-white"
              href="/"
            >
              TrustNexus
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex my-auto items-center gap-8 ml-10">
              {/* SERVICES */}
              <div
                className="hidden lg:block "
                onMouseEnter={() => setHovered("services")}
              >
                <div
                  ref={dropdownRef}
                  className="cursor-pointer flex items-center gap-1 px-2 py-1"
                >
                  Services <TiArrowSortedDown />
                </div>
                {hovered === "services" && (
                  <div className="absolute left-0 top-[70px] w-[100vw] z-[1000] bg-white shadow-md">
                    <Services />
                  </div>
                )}
              </div>

              {/* INDUSTRIES */}
              <div
                className="hidden lg:block "
                onMouseEnter={() => setHovered("industries")}
              >
                <div className="cursor-pointer flex items-center gap-1 px-2 py-1">
                  Industries <TiArrowSortedDown />
                </div>
                {hovered === "industries" && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-[70px] w-[100vw] z-[1000] bg-white shadow-md"
                  >
                    <Industries />
                  </div>
                )}
              </div>

              {/* INSIGHT */}
              <div
                className="hidden lg:block "
                onMouseEnter={() => setHovered("insight")}
              >
                <div className="cursor-pointer flex items-center gap-1 px-2 py-1">
                  Insight <TiArrowSortedDown />
                </div>
                {hovered === "insight" && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-[70px] w-[100vw] z-[1000] bg-white shadow-md"
                  >
                    <Insight />
                  </div>
                )}
              </div>

              {/* ABOUT */}
              <div
                className="hidden lg:block "
                onMouseEnter={() => setHovered("about")}
              >
                <div className="cursor-pointer flex items-center gap-1 px-2 py-1">
                  About <TiArrowSortedDown />
                </div>
                {hovered === "about" && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-[70px] w-[100vw] z-[1000] bg-white shadow-md"
                  >
                    <About />
                  </div>
                )}
              </div>
            </ul>
          </div>

          {/* Right Section for Desktop */}
          <div className="hidden h-full lg:flex items-center gap-6">
            <ul className="flex items-center my-auto gap-6">
              <Link
                href={"/career"}
                style={{ textDecoration: "none" }}
                className="cursor-pointer text-white"
              >
                Careers
              </Link>

              {/* INVESTORS */}
              <div
                className="hidden lg:block "
                onMouseEnter={() => setHovered("investor")}
              >
                <div className="cursor-pointer flex items-center gap-1 px-2 py-1">
                  Investors <TiArrowSortedDown />
                </div>
                {hovered === "investor" && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-[70px] w-full z-[1000] bg-white shadow-md"
                  >
                    <Investor />
                  </div>
                )}
              </div>
            </ul>

            <div className="flex h-full items-center gap-4 ml-4">
              <div className="cursor-pointer border-gray-400 w-[70px] border-l border-r h-full flex items-center justify-center">
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

          {/* Search + Language (Mobile only) */}
          <div className="lg:hidden h-full flex items-center gap-4 ml-auto">
            <div className="cursor-pointer border-gray-400 w-[70px] border-r border-l h-full flex items-center justify-center">
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

        {/* 🔻 Slide-In Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-[70%] h-screen bg-gray-800 text-white  py-6 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-4 border-b-[1px] py-3 flex items-center justify-between w-full">
            <Link
              style={{ textDecoration: "none" }}
              className="text-xl sm:text-2xl italic font-semibold text-white"
              href="/"
            >
              TrustNexus
            </Link>
            <IoClose
              size={23}
              className="cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          <div className="flex my-4 w-full flex-col text-lg">
            <Link
              style={{ textDecoration: "none" }}
              href={"/"}
              className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
            >
              Services <TiArrowSortedDown />
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"/"}
              className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
            >
              Industries <TiArrowSortedDown />
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"/"}
              className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
            >
              Insight <TiArrowSortedDown />
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"/"}
              className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
            >
              About <TiArrowSortedDown />
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"/career"}
              className="list-none text-white cursor-pointer w-full px-4 py-3 border-b border-gray-600"
            >
              Careers
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={"/"}
              className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
            >
              Investors <TiArrowSortedDown />
            </Link>
          </div>
        </div>
      </div>
      {/* {hovered === "services" && <Services onHovered={hovered} setHovered={setHovered} />}
      {hovered === "industries" && <Industries />}
      {hovered === "insight" && <Insight />}
      {hovered === "about" && <About />}
      {hovered === "investor" && <Investor />} */}
    </>
  );
};

export default Navbar;
