"use client";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const page = () => {
  const recaptchaRef = useRef(null);

  return (
    <>
      <div className="">
        <div className=" relative h-[400px] w-full  ">
          <div className="w-full h-full bg-[url('https://static.vecteezy.com/system/resources/thumbnails/001/866/648/small_2x/light-blue-red-blurred-background-vector.jpg')] bg-no-repeat bg-cover bg-center"></div>
          <div className="absolute bottom-10 flex flex-col left-10 sm:left-20 md:left-30 text-white ">
            <span className="text-sm">GET IN TOUCH</span>
            <p className=" text-[40px] md:text-[70px] lg:text-[94px] mb-[7px]">
              How can we help you?
            </p>
          </div>
        </div>
        <div className="w-full h-[826px] mb-[104px] px-10">
          <div className="max-w-[1297px] mx-auto pt-[68px] h-[753px]">
            <h5 className="pb-[48px] font-lighter">
              Please fill the form below
            </h5>
            <form className="max-w-[574px]  " action="">
              <div className="w-full flex items-center gap-[24px]">
                <div className="w-full">
                  <input
                    className="w-full text-[16px] px-[16px] py-[10px] border-[1px] rounded-md "
                    type="text"
                    placeholder="Your name*"
                  />
                </div>
                <div className="w-full">
                  <input
                    className="w-full text-[16px] px-[16px] py-[10px] border-[1px] rounded-md "
                    type="text"
                    placeholder="City*"
                  />
                </div>{" "}
              </div>{" "}
              <div className="flex my-4 h-[100px] items-start  gap-[24px]">
                <div className="w-full">
                  <input
                    className="w-full text-[16px] px-[16px] py-[10px] border-[1px] rounded-md "
                    type="email"
                    placeholder="Email address*"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <input
                    className="w-full text-[16px] px-[16px] py-[10px] border-[1px] rounded-md "
                    type="number"
                    placeholder="Phone number*"
                  />
                  <span className="text-xs">e.g. +92 300 1234567</span>
                </div>
              </div>{" "}
              <div className="w-full h-[76px]  flex items-center gap-[24px]">
                <div className="w-full">
                  <input
                    className="w-full text-[16px] px-[16px] py-[10px] border-[1px] rounded-md "
                    type="text"
                    placeholder="Company name*"
                  />
                </div>
                <div className="w-full">
                  <input
                    className="w-full text-[16px] px-[16px] py-[10px] border-[1px] rounded-md "
                    type="text"
                    placeholder="Your title/role*"
                  />
                </div>{" "}
              </div>
              <div className="w-full">
                <textarea
                  className="w-full resize-y  h-[152px] border-[1px] rounded-md py-[10px] px-[16px] text-[16px] "
                  placeholder="Please tell us a bit about what you're looking for"
                  name=""
                  id=""
                ></textarea>
              </div>
              {/* ✅ reCAPTCHA */}
              <div className="transform scale-90 origin-left">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                />
              </div>
              <div className="mt-[24px]">
                <input
                  type="submit"
                  className="mt-[24px] text-[16px] uppercase px-[50px] py-[16px] bg-[#262b3f] text-white rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
