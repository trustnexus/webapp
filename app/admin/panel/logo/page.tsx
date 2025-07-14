"use client";

import DeleteModal from "@/components/DeleteModal";

import EditLogo from "@/components/Logo/EditLogo";
import useAppStore from "@/store/store";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

export default function AdminLogoPage() {
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const logos = [
    "/logo.jpeg",
    "/web-logo.png",
    "/website-logo.png",
    "/logo.jpeg",
    "/web-logo.png",
    "/website-logo.png",
  ];
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };
  const {
    isEditLogoModalOpen,
    setIsEditLogoModalOpen,
    setIsDeleteLogoModalOpen,
    isDeleteLogoModalOpen,
  } = useAppStore();
  const handleUpload = async () => {
    if (!logoFile) return;
    setUploading(true);

    // 🟡 Fake upload simulation
    setTimeout(() => {
      alert("Logo uploaded successfully!");
      setUploading(false);
    }, 1500);

    // ✅ Real API upload here
    // const formData = new FormData();
    // formData.append("logo", logoFile);
    // await fetch('/api/upload-logo', { method: 'POST', body: formData });
  };

  return (
    <div className="p-3 relative min-h-[calc(100vh-71px)] w-full ">
      <h3 className="text-lg font-bold mb-4">Upload Site Logo</h3>

      <div className="mb-4 max-w-xl">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full cursor-pointer text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-lg file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border-2 rounded-lg"
        />
      </div>

      {previewURL && (
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">Logo Preview:</p>
          <img src={previewURL} alt="Logo Preview" className="h-24" />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!logoFile || uploading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload Logo"}
      </button>

      <hr />
      <div className="grid grid-cols-1 px-5 gap-7 sm:grid-cols-2 md:grid-cols-3 my-18">
        {logos.map((logo, index) => {
          return (
            <div key={index} className=" relative h-24 w-24">
              <img
                src={logo}
                alt={`logo-${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute -top-10 -right-10 flex-col flex gap-2 items-center justify-center">
                <FaEdit
                  onClick={() => setIsEditLogoModalOpen(true)}
                  size={26}
                  className="cursor-pointer text-yellow-500"
                />
                <MdOutlineDelete
                  onClick={() => {
                    setIsDeleteLogoModalOpen(true);
                  }}
                  size={26}
                  className="cursor-pointer text-red-500"
                />
              </div>
            </div>
          );
        })}
      </div>
      {isEditLogoModalOpen && (
        <div className="absolute backdrop-brightness-50 backdrop-filter inset-0 mx-auto w-full">
          <EditLogo />
        </div>
      )}
      {isDeleteLogoModalOpen && (
        <div className="absolute backdrop-brightness-50 backdrop-filter  inset-0 mx-auto w-full">
          <DeleteModal />
        </div>
      )}
    </div>
  );
}
