"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState, lazy } from "react";
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiArrowSortedDown } from "react-icons/ti";
import Services from "./NavComponents/Services";
import Industries from "./NavComponents/Industries";
import Insights from "./NavComponents/Insights";
import About from "./NavComponents/About";
import Investor from "./NavComponents/Investor";
import useAppStore from "@/store/store";
import MobileView from "./NavComponents/MobileView";

const Navbar = () => {
  const {
    hovered,
    setHovered,
    menuOpen,
    setMenuOpen,
    showServices,
    setShowServices,
  } = useAppStore();

  const [isHovered, setIsHovered] = useState(false);

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
        onClick={() => handleClickOutside}
        className="border-b hover:bg-gray-700 hover:transition-all hover:duration-200 ease-in-out fixed top-0 w-full z-50 text-black border-gray-500  bg-white"
      >
        <div className="max-w-[1390px] mx-auto w-full h-[70px] px-4 md:px-10 flex items-center justify-between">
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
            <div className="hover:text-cyan-400">
              <Link
                style={{ textDecoration: "none" }}
                className="text-md  w-full   my-auto flex  items-center justify-center sm:text-lg  font-lighter text-black"
                href="/"
              >
                <img
                  className="sm:w-16 w-12 h-12  my-auto sm:h-16"
                  src="./web-logo.png"
                  alt="web-logo"
                  loading="lazy"
                />
                <span className="cursor-pointer hover:border-b-[1px] border-cyan-400 hover:text-cyan-400 flex items-center  ">
                  {" "}
                  Trust Nexus
                </span>{" "}
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex my-auto items-center gap-8 ml-10">
              {/* SERVICES */}
              <div
                className="hidden lg:block "
                onMouseEnter={() => setHovered("services")}
              >
                <div
                  ref={dropdownRef}
                  className="cursor-pointer hover:border-b-[1px] border-cyan-400 hover:text-cyan-400 flex items-center gap-1 px-2 py-1"
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
                <div className="cursor-pointer hover:border-b-[1px] border-cyan-400 hover:text-cyan-400 flex items-center gap-1 px-2 py-1">
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
                onMouseEnter={() => setHovered("insights")}
              >
                <div className="cursor-pointer hover:border-b-[1px] border-cyan-400 hover:text-cyan-400 flex items-center gap-1 px-2 py-1">
                  Insights <TiArrowSortedDown />
                </div>
                {hovered === "insights" && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-[70px] w-[100vw] z-[1000] bg-white shadow-md"
                  >
                    <Insights />
                  </div>
                )}
              </div>

              {/* ABOUT */}
              <div
                className="hidden lg:block "
                onMouseEnter={() => setHovered("about")}
              >
                <div className="cursor-pointer hover:border-b-[1px] border-cyan-400 hover:text-cyan-400 flex items-center gap-1 px-2 py-1">
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
            <ul className="flex items-center  my-auto gap-6">
              <Link
                href={"/career"}
                style={{
                  textDecoration: "none",
                  color: isHovered ? "#26C6DA" : "white",
                }}
                className="cursor-pointer  text-black"
              >
                <span className="cursor-pointer hover:border-b-[1px] border-cyan-400 hover:text-cyan-400 flex items-center gap-1 px-2 py-1">
                  {" "}
                  Careers
                </span>{" "}
              </Link>

              {/* INVESTORS */}
              <div
                className="hidden lg:block "
                onMouseEnter={() => setHovered("investor")}
              >
                <div className="cursor-pointer hover:border-b-[1px] border-cyan-400 hover:text-cyan-400 flex items-center gap-1 px-2 py-1">
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
                  className="hover:scale-[1.4] hover:text-cyan-400 transition-all duration-200"
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
        <MobileView />
      </div>
    </>
  );
};

export default Navbar;
