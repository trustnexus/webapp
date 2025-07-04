import Link from "next/link";
import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
const Industries = () => {
    useEffect(() => {
    gsap.fromTo(
      ".industries",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    );
  }, []);
  return (
    <div className="industries text-black w-full shadow-md min-h-[300px] py-6 px-10">
      <div className="flex max-w-[1320px] mx-auto justify-around gap-5 ">
        <div className="max-w-[390px] flex flex-col items-start justify-between gap-7 w-full h-full bg-gray-200 px-5 py-3">
          <p className="md:text-[29px] font-semibold">Industries</p>
          <div className="w-full ">
            <img
              src="https://www.systemsltd.com/sites/default/files/2024-11/Systems-Limited-MEA.webp"
              alt=""
            />
          </div>
          <p className="font-medium text-xl">
            Perfecting the art of financial consolidation
          </p>
          <div className="">
            <Link
              href={"/contact-us"}
              style={{ textDecoration: "none" }}
              className="flex items-center justify-center gap-2"
            >
              Learn more <GoArrowUpRight size={20} />{" "}
            </Link>
          </div>
        </div>
        <div className="flex min-w-[360px]   w-full flex-col gap-3 ">
          <div className="">
            <Link style={{textDecoration:'none',color:'black'}} href={'/industries/communication'} className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400">
              Communication{" "}
            </Link>
          </div>
          <div className="">
            <h5 className="text-[20px] font-semibold">
              Banking & Financial Services
            </h5>
          </div>

          <div className="">
            <h5 className="text-[20px] font-semibold ">Public Sector </h5>
          </div>
        </div>
        <div className="flex min-w-[360px]   w-full flex-col gap-3 ">
          <div className="flex flex-col">
            <h5 className="text-[20px] mb-[40px] font-semibold">Health</h5>
         
          </div>

          <div className="flex flex-col">
            <h5 className="text-[20px] font-semibold">
Retail            </h5>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
