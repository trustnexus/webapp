"use client";
import useAppStore from "@/store/store";
import BannerForm from "@/components/Banner/BannerForm";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import DeleteModal from "@/components/DeleteModal";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Banner } from "@/types/types";

export default function page() {
  const [searchedValue, setSearchedValue] = useState<string>("");

  const {
    setIsCreateBannerModalOpen,
    setIsEditBannerModalOpen,
    isCreateBannerModalOpen,
    isEditBannerModalOpen,
    isDeleteBannerModalOpen,
    setIsDeleteBannerModalOpen,
    banners,
    setBanners,
    setSelectedBanner,
  } = useAppStore();

  const { data, isLoading } = useFetch<{ data: Banner[] }>(
    "banners",
    "/banners"
  );
  useEffect(() => {
    if (data && data.data) {
      setBanners(data.data);
      console.log("data", data);
    }
  }, [data]);

  console.log(banners);
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };
  return (
    <div className="relative p-3 min-h-screen">
      <h3 className="text-2xl font-bold">Manage Banners</h3>
      <button
        onClick={() => {
          setIsCreateBannerModalOpen(true);
          setSelectedBanner(null);
        }}
        className="bg-blue-500 text-white px-4 py-2 my-3 rounded"
      >
        Add Banner
      </button>
      <hr />
      <div className="flex flex-col md:flex-row my-4 md:items-center justify-between ">
        <h5 className="">Banners list</h5>
        <div className="border border-gray-300 flex items-center py-2 px-1 gap-2 rounded-lg flex-[0.5]">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-2 w-full  "
            action=""
          >
            <IoSearch className="text-gray-600" size={27} />{" "}
            <input
              onChange={(e) => setSearchedValue(e.target.value)}
              value={searchedValue}
              className="w-full  h-full py-2 px-1 focus:outline-none"
              type="text"
              placeholder="Search banner"
            />
          </form>
        </div>
      </div>{" "}
      <div className="">
        {isLoading ? (
          <p>Loading banners...</p>
        ) : (
          <div className="grid  grid-cols-1 sm:grid-cols-2 max-w-[99%] lg:grid-cols-3 gap-4">
            {banners.map((banner, index) => (
              <div
                key={index}
                className="relative border rounded-lg py-5 px-3 shadow bg-white"
              >
                <video
                  src={banner?.media}
                  controls
                  className="h-42 w-full object-cover rounded mb-2"
                />
                <p className="bg-gray-200 inline rounded-lg px-2 py-1">
                  {banner?.category}
                </p>
                <h4 className="text-lg font-bold">{banner?.heading}</h4>
                <p className="text-sm">{banner?.description}</p>
                <Link href={banner?.route || "/"}>Read more</Link>
                <div className="absolute top-3 right-3 flex gap-2">
                  <FaEdit
                    onClick={() => {
                      setIsEditBannerModalOpen(true);
                      setSelectedBanner(banner); // 👈 Save current banner for edit
                    }}
                    className="cursor-pointer text-yellow-500"
                    size={22}
                  />
                  <MdOutlineDelete
                    onClick={() => setIsDeleteBannerModalOpen(true)}
                    className="cursor-pointer text-red-500"
                    size={22}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {isCreateBannerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
          <BannerForm />
        </div>
      )}
      {isEditBannerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
          <BannerForm />
        </div>
      )}
      {isDeleteBannerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <DeleteModal />
        </div>
      )}
    </div>
  );
}
