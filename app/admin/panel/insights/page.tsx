"use client";
import DeleteModal from "@/components/DeleteModal";
import InsightForm from "@/components/Insights/InsightForm";

import useAppStore from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

export default function pag() {
  const [searchedValue, setSearchedValue] = useState<string>("");

  const {
    isDeleteAnInsightModalOpen,
    isEditAnInsightModalOpen,
    isCreateAnInsightModalOpen,
    setIsCreateAnInsightModalOpen,
    setIsEditAnInsightModalOpen,
    setIsDeleteAnInsightModalOpen,
  } = useAppStore();
  const insights = [
    {
      heading: "heading 1",
      description: "jsajd asdjnsad sakjndsa djsakd sa",
      link: "/",
      img: "/web-logo.png",
      category: "blogs",
    },
    {
      heading: "heading 1",
      description: "jsajd asdjnsad sakjndsa djsakd sa",
      link: "/",
      img: "/web-logo.png",
    },
    {
      heading: "heading 1",
      description: "jsajd asdjnsad sakjndsa djsakd sa",
      link: "/",
      img: "/web-logo.png",
    },
    {
      heading: "heading 1",
      description: "jsajd asdjnsad sakjndsa djsakd sa",
      link: "/",
      img: "/web-logo.png",
    },
    {
      heading: "heading 1",
      description: "jsajd asdjnsad sakjndsa djsakd sa",
      link: "/",
      img: "/web-logo.png",
    },
    {
      heading: "heading 1",
      description: "jsajd asdjnsad sakjndsa djsakd sa",
      link: "/",
      img: "/web-logo.png",
    },
  ];
  const handleSearchSubmit = (e: React.FormEvent) => {};
  return (
    <div className="relative p-3  min-h-[calc(100vh-71px)]">
      <h3 className="text-2xl font-bold">Manage Insights</h3>

      <button
        style={{ borderRadius: "10px" }}
        className="bg-blue-400 text-white px-2 py-2 rounded-lg"
        onClick={() => {
          setIsCreateAnInsightModalOpen(true);
        }}
      >
        Add an insight
      </button>
      <hr />

      <div className="">
        <div className="flex my-4 flex-col md:flex-row md:items-center justify-between ">
          <h5 className="">Insights List</h5>
          <div className=" border border-gray-300 flex items-center py-2 px-1 gap-2 rounded-lg flex-[0.5]">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center gap-2 w-full"
              action=""
            >
              <IoSearch className="text-gray-600" size={27} />
              <input
                onChange={(e) => setSearchedValue(e.target.value)}
                value={searchedValue}
                className="w-full h-full py-2 px-1 focus:outline-none"
                type="text"
                placeholder="Search Insight"
              />
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {insights.map((insight, index) => {
            return (
              <div key={index} className="border-2 relative rounded-lg p-3">
                <Image
                  src={insight.img}
                  alt={`Insight image ${index + 1}`}
                  width={100}
                  height={100}
                />
                <p className="bg-gray-200 inline px-2 py-1 rounded-lg ">
                  {insight.category}
                </p>
                <h4>{insight.heading}</h4>
                <p>{insight.description}</p>
                <Link
                  style={{ textDecoration: "none" }}
                  className="hover:border-b border-b-[1px] border-b-transparent py-1"
                  href={insight.link}
                >
                  Learn more
                </Link>
                <div className="absolute top-4 right-4 flex gap-2 items-center justify-center">
                  <FaEdit
                    onClick={() => setIsEditAnInsightModalOpen(true)}
                    size={26}
                    className="cursor-pointer text-yellow-500"
                  />
                  <MdOutlineDelete
                    onClick={() => {
                      setIsDeleteAnInsightModalOpen(true);
                    }}
                    size={26}
                    className="cursor-pointer text-red-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isCreateAnInsightModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 h-screen my-auto overflow-y-auto">
          <InsightForm />
        </div>
      )}
      {isEditAnInsightModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
          <InsightForm />
        </div>
      )}
      {isDeleteAnInsightModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
          <DeleteModal />
        </div>
      )}
    </div>
  );
}
