import Link from "next/link";
import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
const Insights = () => {
  useEffect(() => {
    gsap.fromTo(
      ".insight",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    );
  }, []);
  return (
    <div className="insight text-black w-full shadow-md min-h-[300px] py-6 px-10">
      <div className="flex max-w-[1320px] mx-auto justify-around gap-5 ">
        <div className="max-w-[390px] flex flex-col items-start justify-between gap-7 w-full h-full bg-gray-200 px-5 py-3">
          <p className="md:text-[29px] font-semibold">Insights</p>
          <div className="w-full ">
            <img
              src="https://www.systemsltd.com/sites/default/files/2025-03/Systems%20Arabia%20unveils%20AI%20innovations%20at%20br%20LEAP%202025%20as%20the%20Bronze%20Sponsor_0.webp"
              alt=""
            />
          </div>
          <p className="font-medium text-xl">
            Trust Nexus Arabia unveils AI innovations at LEAP 2025 as the Bronze
            Sponsor
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
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/insights/case-studies"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Case Studies{" "}
            </Link>
          </div>
          <div className="">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/insights/newsoom"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Newsroom
            </Link>
          </div>

          <div className="">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/insights/whitepapers-ebooks"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Whitepapers/eBooks{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
