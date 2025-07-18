"use client";
import Help from "@/components/Help";
import Link from "next/link";
import React, { useState } from "react";

const totalNewsRoom = 30;
const itemsPerPage = 6;
const totalPages = Math.ceil(totalNewsRoom / itemsPerPage);

const Page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Paginated items (you can replace this with real API data later)
  const paginatedItems = Array(totalNewsRoom)
    .fill(null)
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="">
      {/* Banner */}
      <div className="bg-[url('https://img.freepik.com/free-vector/gradient-brain-background_23-2150460414.jpg?semt=ais_hybrid&w=740')] bg-no-repeat bg-center bg-cover w-full h-[400px] md:h-[699px] flex items-end px-4 md:px-18 text-white">
        <div className="pb-10 px-10">
          <p className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-tight font-extralight">
            Latest Happenings
          </p>
          <button className="bg-white p-3 text-black md:px-[50px] md:py-[16px] mt-4">
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Featured Insight Section */}
      <section className="py-20 px-4">
        <div className="min-h-[100px] max-w-[1468px] mx-auto">
          <div className="max-w-[1320px] mx-auto border flex flex-col lg:flex-row">
            <div className="w-full lg:max-w-[550px] flex flex-col gap-8 p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div>
                <p className="text-[13px]">OUR FEATURED INSIGHT</p>
                <p className="mb-[10px] text-[20px] md:text-[26px]">
                  Systems Limited recognized as the winner of 2023 Microsoft
                  Country/Region Partner of the Year
                </p>
                <Link style={{ textDecoration: "none" }} href={"/"}>
                  Read more
                </Link>
              </div>
              <div>
                <img
                  src="https://www.systemsltd.com/sites/default/files/styles/feature_image/public/2023-10/Systems-Limited-recognized-as-the-winner-of-2023-Microsoft-CountryRegion-Partner-of-the-Year-_3__0_5.webp?itok=dfBT_F0C"
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:max-w-[770px] flex flex-col gap-6 pt-10 lg:pt-60">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[299px] p-4 gap-4"
                >
                  <div className="max-w-full md:max-w-[472px]">
                    <p className="text-[20px] md:text-[26px]">
                      Systems Limited MEA (Techvista) Honored with Best Emerging
                      Partner Award at Cloudera Partner Day
                    </p>
                    <Link style={{ textDecoration: "none" }} href={"/"}>
                      Read more
                    </Link>
                  </div>
                  <div className="w-full md:w-[224px] overflow-hidden h-[217px]">
                    <img
                      className="w-full h-full object-cover"
                      src="https://www.systemsltd.com/sites/default/files/2024-10/Systems%20Limited%20MEA%20%28Techvista%29%20Honored%20with%20Best%20Emerging%20Partner%20Award%20at%20Cloudera%20Partner%20Day.webp"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases with Pagination */}
      <section className="px-4">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center justify-center ">
            <p className="text-center py-[50px] md:text-[40px] text-[28px]">
              Press releases
            </p>
          </div>

          {/* Paginated Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedItems.map((_, index) => (
              <div
                key={index}
                className="w-full h-auto border rounded-xl overflow-hidden shadow-sm"
              >
                <div className="h-[250px] sm:h-[300px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://www.systemsltd.com/sites/default/files/2025-04/Strengthening%20labor%20compliance%20and%20corporate%20investigations.webp"
                    alt="Press Release"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-lg mb-2">
                    Press Release #
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </p>
                  <Link href="/" className="text-blue-600 underline text-sm">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="border border-gray-300 rounded-xl px-4 py-2 text-sm disabled:opacity-50"
            >
              Prev
            </button>

            {Array(totalPages)
              .fill(null)
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`border text-[15px] md:text-[20px] border-gray-300 rounded-xl px-4 py-2 ${
                    currentPage === index + 1
                      ? "bg-black text-white"
                      : "text-black"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="border border-gray-300 rounded-xl px-4 py-2 text-sm disabled:opacity-50"
            >
              Next
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

export default Page;
