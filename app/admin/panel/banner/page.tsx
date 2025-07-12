"use client";
import useAppStore from "@/store/store";
import BannerForm from "@/components/Banner/BannerForm";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import DeleteModal from "@/components/DeleteModal";
import Link from "next/link";

export default function page() {
  const {
    setIsCreateBannerModalOpen,
    setIsEditBannerModalOpen,
    isCreateBannerModalOpen,
    isEditBannerModalOpen,
    isDeleteBannerModalOpen,
    setIsDeleteBannerModalOpen,
  } = useAppStore();

  const banners = [
    {
      heading: "Welcome",
      description: "This is the main banner",
      route: "/home",
      video: "/banner1.mp4",
    },
    {
      heading: "Contact Us",
      description: "Reach out to us",
      route: "/contact",
      video: "/banner2.mp4",
    },
  ];

  return (
    <div className="relative p-3 min-h-[calc(100vh-71px)]">
      <h3 className="text-2xl font-bold">Manage Banners</h3>

      <button
        onClick={() => setIsCreateBannerModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 my-3 rounded"
      >
        Add Banner
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative border rounded-lg py-5 px-3 shadow bg-white"
          >
            <video
              src={banner.video}
              controls
              className="h-42 w-full object-cover rounded mb-2"
            />
            <h4 className="text-lg font-bold">{banner.heading}</h4>
            <p className="text-sm">{banner.description}</p>
            <Link href={banner.route}></Link>
            <div className="absolute top-3 right-3 flex gap-2">
              <FaEdit
                onClick={() => setIsEditBannerModalOpen(true)}
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

      {isCreateBannerModalOpen && (
        <div className="absolute backdrop-brightness-50 backdrop-filter inset-0 mx-auto w-full">
          <BannerForm />
        </div>
      )}

      {isEditBannerModalOpen && (
        <div className="absolute backdrop-brightness-50 backdrop-filter inset-0 mx-auto w-full">
          <BannerForm />
        </div>
      )}
      {isDeleteBannerModalOpen && (
        <div className="absolute backdrop-brightness-50 backdrop-filter inset-0 mx-auto w-full">
          <DeleteModal />
        </div>
      )}
    </div>
  );
}
