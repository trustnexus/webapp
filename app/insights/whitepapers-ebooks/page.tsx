"use client";
import Help from "@/components/Help";
import Link from "next/link";
import React, { useState } from "react";

const totalItems = 30; // total whitepapers ya ebooks
const itemsPerPage = 6;
const totalPages = Math.ceil(totalItems / itemsPerPage);

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedItems = Array(totalItems)
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

      {/* Title */}
      <section className="py-10 px-4">
        <div className="max-w-[1320px] mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-between">
          <p className="max-w-[900px] mx-auto text-[28px] py-[30px]  md:text-[40px]">
            Expert's take
          </p>
        </div>
      </section>

      {/* Card Grid */}
      <section className="px-4">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedItems.map((_, index) => (
              <div key={index} className="w-full h-auto overflow-hidden ">
                <div className="h-[250px] sm:h-[300px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://www.systemsltd.com/sites/default/files/2025-04/Strengthening%20labor%20compliance%20and%20corporate%20investigations.webp"
                    alt="Case Study"
                  />
                </div>
                <div className="p-4">
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
          <div className="flex mb-10 flex-wrap justify-center gap-2 mt-10">
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
      </section>

      {/* More Insights */}
      <section className="h-auto text-white py-[100px] bg-[#262b3f] mx-auto ">
        <div className="mb-[18px] max-w-[1320px] px-10 mx-auto text-[26px] md:text-[40px]">
          <p>More insights</p>
        </div>
        <div className="max-w-[1320px] mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Managing information with disruptive technologies",
            "Privacy, security, trust: Safeguarding customer data in the digital age",
            "Beyond the hype: Why data warehouse project fails and what is the resolution",
            "Endowing personalized customer experiences",
          ].map((title, idx) => (
            <div key={idx} className="w-full px-2 h-auto">
              <p className="mb-[24px] text-[19px] md:text-[24px]">{title}</p>
              <Link href={"/"}>Read more</Link>
            </div>
          ))}
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
