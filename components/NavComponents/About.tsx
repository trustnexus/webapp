import React, { useEffect } from "react";
import gsap from 'gsap'
const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2,  }
    );
  }, []);
  return (
    <div className="about text-black w-full shadow-md min-h-[300px] py-6 px-10">
      <div className="flex max-w-[1320px] mx-auto justify-center items-center gap-5 ">
        <div className="flex min-w-[360px]   w-full flex-col gap-3 ">
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
        </div>
        <div className="flex  w-full flex-col gap-3 ">
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
        </div>
      </div>
    </div>
  );
};

export default About;
