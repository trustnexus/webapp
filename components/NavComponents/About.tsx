import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import useAppStore from "@/store/store";
const About = () => {
  const { setHovered } = useAppStore();
  useEffect(() => {
    gsap.fromTo(
      ".about",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    );
  }, []);
  return (
    <div className="about text-black w-full shadow-md min-h-[300px] py-6 px-10">
      <div className="flex max-w-[1320px] mx-auto justify-center items-center gap-5 ">
        <div className="flex min-w-[360px]   w-full flex-col gap-3 ">
          <div className="">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/company-overview"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Who we are{" "}
            </Link>
          </div>
          <div className="">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/company-overview#accomplishment"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Our accomplishments{" "}
            </Link>
          </div>

          <div className="">
            <h5 className="text-[20px] font-semibold "> </h5>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/company-overview#leadership"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Our Leadership{" "}
            </Link>
          </div>
          <div className="">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/company-overview#global-presence"}
              className="text-[20px] cursor-pointer mb-[100px] font-semibold hover:text-orange-400"
            >
              Our Global presence{" "}
            </Link>
          </div>
        </div>
        {/* <div className="flex  w-full flex-col gap-3 ">
          <div className="">
            <h5 className="text-[20px] mb-[100px] font-semibold">
              Who we are{" "}
            </h5>
          </div>
          <div className="">
            <h5 className="text-[20px] font-semibold">Our accomplishments </h5>
          </div>

          <div className="">
            <h5 className="text-[20px] font-semibold ">Our Leadership </h5>
          </div>
          <div className="">
            <h5 className="text-[20px] font-semibold ">Our Global presence </h5>
          </div>
        </div> */}
      </div>
      <div
        onClick={() => setHovered("")}
        className="absolute top-5 right-10 cursor-pointer"
      >
        <IoMdClose size={26} />
      </div>
    </div>
  );
};

export default About;
