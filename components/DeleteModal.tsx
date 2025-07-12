import useAppStore from "@/store/store";
import React from "react";

const DeleteModal = () => {
  const {
    isDeleteBannerModalOpen,
    setIsDeleteBannerModalOpen,
    isDeleteLogoModalOpen,
    setIsDeleteLogoModalOpen,
    isDeleteServiceModalOpen,
    setIsDeleteServiceModalOpen,
  } = useAppStore();
  return (
    <div className="flex mx-auto items-center h-full my-auto backdrop:brightness-50 justify-center max-w-[600px] rounded-lg">
      <div className="p-3 border-2 rounded-lg bg-white">
        <p>Are you sure you want to delete this {isDeleteLogoModalOpen && 'logo'} {isDeleteBannerModalOpen && 'banner'} {isDeleteServiceModalOpen && 'service'}</p>

        <div className="flex items-center justify-end gap-3 mt-4">
          <button
            onClick={() => {}}
            style={{ borderRadius: "10px" }}
            className="bg-red-400 text-white px-4 py-1 shadow-md rounded-xl"
          >
            Yes
          </button>
          <button
            onClick={() => {
              {
                isDeleteBannerModalOpen && setIsDeleteBannerModalOpen(false);
              }
              {
                isDeleteLogoModalOpen && setIsDeleteLogoModalOpen(false);
              }
              {
                isDeleteServiceModalOpen && setIsDeleteServiceModalOpen(false);
              }
            }}
            style={{ borderRadius: "10px" }}
            className="bg-white px-4 py-1 border-2 border-gray-200 shadow-md rounded-xl"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
