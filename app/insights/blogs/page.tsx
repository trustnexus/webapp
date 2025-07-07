"use client";
import Help from "@/components/Help";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";

const page = () => {
  return (
    <div className="">
      {/* Banner */}
      <div className="bg-[url('https://png.pngtree.com/background/20210716/original/pngtree-vector-crystal-purple-background-picture-image_1394349.jpg')] bg-no-repeat bg-center bg-cover w-full h-[400px] md:h-[699px] flex items-end px-4 md:px-18 text-white">
        <div className="pb-8 px-10">
          <p className="text-sm md:text-base uppercase">Blogs
</p>
          <p className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-tight font-semibold">
           Tech experts' latest: Innovations in digital enterprise
          </p>
        </div>
      </div>

      {/* Search Section */}
      <section className="py-10 px-4">
        <div className="max-w-[1320px] mx-auto flex flex-wrap gap-4 justify-center md:justify-between">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full md:w-auto">
            <CiSearch size={20} />
            <input
              type="text"
              placeholder="Search for blogs..."
              className="outline-none px-2 w-full md:w-auto bg-transparent"
            />
          </div>
          <select className="border border-gray-300 rounded-full px-4 py-2 w-full md:w-auto">
            <option>Industries</option>
          </select>
          <select className="border border-gray-300 rounded-full px-4 py-2 w-full md:w-auto">
            <option>Services</option>
          </select>
          <button className="bg-black text-white rounded-full px-6 py-2 w-full md:w-auto">
            Search
          </button>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-full h-auto border rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="h-[250px] sm:h-[300px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://www.systemsltd.com/sites/default/files/2025-04/Strengthening%20labor%20compliance%20and%20corporate%20investigations.webp"
                      alt="Case Study"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-900 inline px-3 py-1 rounded-md mb-1 bg-gray-200">BLOG</p>
                    <p className="font-semibold text-lg mb-2">
                      Strengthening labor compliance and corporate investigations
                    </p>
                    <Link href="/" className="text-blue-600 underline text-sm">
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-10">
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

        {/* Help Component */}
        <div className="mt-16">
          <Help />
        </div>
      </section>
    </div>
  );
};

export default page