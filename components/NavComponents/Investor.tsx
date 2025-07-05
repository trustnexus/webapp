import Link from "next/link";
import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";

const Investor = () => {
  useEffect(() => {
    gsap.fromTo(
      ".investors",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    );
  }, []);
  return (
    <div className="investors text-black w-full shadow-md min-h-[300px] py-6 px-10">
      <div className="flex max-w-[1320px] mx-auto justify-around gap-5 ">
        <div className="max-w-[390px] flex flex-col items-start justify-between gap-7 w-full h-full bg-gray-200 px-5 py-3">
          <p className="md:text-[29px] font-semibold">Investors</p>
          <div className="w-full ">
            <img
              src="https://www.systemsltd.com/sites/default/files/2023-11/Invesors%20thumbnail.webp"
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
              className="flex items-center justify-center"
            >
              _<GoArrowUpRight size={20} />
            </Link>
          </div>
        </div>
        <div className="flex min-w-[360px]   w-full flex-col gap-3 ">
          <div className="">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/investor/investor-relation"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Investor Relations{" "}
            </Link>
          </div>
          <div className="">
        
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/investor/governance"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Governance{" "}
            </Link>
          </div>

          <div className="">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/investor/company-profile"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Company profile{" "}
            </Link>
          </div>
          <div className="flex flex-col">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/investor/financial-reports"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Financial Reports
            </Link>
          </div>
        </div>
        <div className="flex min-w-[360px]   w-full flex-col gap-3 ">
          <div className="flex flex-col">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/investor/notices-quick-links"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Notices & Quick Links{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
