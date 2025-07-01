import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
// import Carousal from "@/components/Carousal";

const Navbar = () => {
  return (
    <div className="bg-transparent absolute text-white top-0 z-100 grid border-b-[1px] place-content-center w-full h-[70.83px] ">
      <div className="flex items-center justify-between  w-[1320px] mx-auto h-[70px]">
        <div className="flex gap-3 ">
          <div className="pr-7">
            <Link className="text-xl italic no-underline text-white font-semibold" href={"/"}>
              TrustNexus
            </Link>
          </div>
          <ul className="flex items-center justify-between gap-8">
            <li className="cursor-pointer">Services 🔻</li>
            <li className="cursor-pointer">Industries 🔻</li>
            <li className="cursor-pointer">Insight 🔻</li>
            <li className="cursor-pointer">About 🔻</li>
          </ul>
        </div>
        <div className="h-[70px] flex items-center justify-center">
          <ul className="flex items-center h-[70px]  gap-10">
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Investors 🔻</li>
          </ul>
          <div className="flex items-center justify-center">
            <div className="border-gray-400 cursor-pointer m-3 border-[0.8px] w-[70px]  h-[70px] flex items-center justify-center ">
              <CiSearch
                className="hover:scale-[1.5] transition-all duration-200 "
                size={20}
              />
            </div>
            <div className="flex cursor-pointer items-center justify-center gap-1">
              <GrLanguage />{" "}
              <span className="flex items-center justify-center gap-1">
                PK <FaArrowDown />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <Carousal /> */}
    </div>
  );
};

export default Navbar;
