import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
const Help = () => {
  const router = useRouter();
  return (
    <div className="helpSection flex items-center justify-center h-auto min-h-[460px] px-6 py-16 md:py-[100px] bg-white">
      <div className="flex items-center flex-col gap-6 max-w-[800px] text-center">
        <div>
          <h1 className="helpHeading text-2xl md:text-4xl font-semibold mb-2">
            How can we help you?
          </h1>
          <p className="helpPara text-base md:text-lg text-gray-700">
            Are you ready to push boundaries and explore new frontiers of
            innovation?
          </p>
        </div>
        <button
          onClick={() => router.push("/contact-us")}
          className="helpBtn px-6 py-3 text-sm md:text-base bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-300"
        >
          LET'S WORK TOGETHER
        </button>
      </div>
    </div>
  );
};

export default Help;
