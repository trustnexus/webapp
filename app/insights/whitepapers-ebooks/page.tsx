"use client";
import Help from "@/components/Help";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";

const page = () => {
  return (
    <div className="">
      {/* Banner */}
      <div className="bg-[url('https://images.unsplash.com/photo-1530533718754-001d2668365a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJsdWV8ZW58MHx8MHx8fDA%3D')] bg-no-repeat bg-center bg-cover w-full h-[400px] md:h-[699px] flex items-end px-4 md:px-18 text-white">
        <div className="pb-8 px-10">
          <p className="text-sm md:text-base uppercase">Whitepaper & eBooks</p>
          <p className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-tight font-semibold">
            The latest ideas from <br />
            our experts in the <br />
            tech space
          </p>
          <button className="bg-white text-black p-3  md:px-[50px] md:py-[16px]">
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Search Section */}
      <section className="py-10 px-4">
        <div className="max-w-[1320px] mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-between">
          <p className="max-w-[900px] mx-auto text-[28px] py-[30px]  md:text-[40px]">
            Expert's take
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="w-full h-auto   overflow-hidden ">
                  <div className="h-[250px] sm:h-[300px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://www.systemsltd.com/sites/default/files/2025-04/Strengthening%20labor%20compliance%20and%20corporate%20investigations.webp"
                      alt="Case Study"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-lg mb-2">
                      Strengthening labor compliance and corporate
                      investigations
                    </p>
                    <Link href="/" className="text-blue-600 underline text-sm">
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination */}
          <div className="flex mb-10 flex-wrap justify-center md:justify-start gap-2 mt-10">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <button
                  key={index}
                  className="border text-[15px] md:text-[20px] border-gray-300 rounded-xl px-4 py-2 "
                >
                  {index + 1}
                </button>
              ))}
            <button className="border border-gray-300 rounded-xl px-4 py-2 text-sm">
              Next
            </button>
            <button className="border border-gray-300 rounded-xl px-4 py-2 text-sm">
              Last
            </button>
          </div>
        </div>
      </section>
      <section className="h-[714px] my-auto text-white py-[100px] bg-[#262b3f] mx-auto ">
        <div className="mb-[18px] max-w-[1320px] mx-auto text-[26px] md:text-[40px]">
          <p>More insights</p>
        </div>
        <div className="max-w-[1320px] mx-auto h-[420px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="w-[404px]  h-[203px] ">
              <p className="mb-[24px] text-[19px] md:text-[24px]">
              Managing information with disruptive technologies
            </p>
            <Link href={"/"}>Read more</Link>
          </div>
          <div className="w-[404px]  h-[203px] px-[12px]">
             <p className="mb-[24px] text-[19px] md:text-[24px]">
              Privacy, security, trust: Safeguarding customer data in the
              digital age
            </p>
            <Link href={"/"}>Read more</Link>
          </div>{" "}
         <div className="w-[404px] my-auto mx-auto h-[203px] px-[12px]">
            <p className="mb-[24px] text-[19px] md:text-[24px]">
              Beyond the hype: Why data warehouse project fails and what is the
              resolution
            </p>
            <Link href={"/"}>Read more</Link>
          </div>
         <div className="w-[404px] h-[203px] mx-auto my-auto px-[12px]">
            <p className="mb-[24px] text-[19px] md:text-[24px]">
              Endowing personalized customer experiences
            </p>
            <Link href={"/"}>Read more</Link>
          </div>
        </div>
      </section>
      {/* Help Component */}
      <div className="mt-16">
        <Help />
      </div>
    </div>
  );
};

export default page;
