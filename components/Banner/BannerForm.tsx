"use client";

import useAppStore from "@/store/store";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";

type BannerFormInputs = {
  heading: string;
  description: string;
  route: string;
};

const BannerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BannerFormInputs>();

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const {
    setIsCreateBannerModalOpen,
    setIsEditBannerModalOpen,
    isCreateBannerModalOpen,
    isEditBannerModalOpen,
  } = useAppStore();

  const onSubmit = (data: BannerFormInputs) => {
    console.log("Banner Data:", data, file);
    // API logic here
  };

  const isVideo = file?.type.startsWith("video");

  return (
    <div className="border-2 border-gray-400 max-w-[700px] mx-auto mt-10 p-6 bg-white rounded shadow ">
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-bold">
          {isCreateBannerModalOpen ? "Add Banner" : "Edit Banner"}
        </p>
        <IoMdCloseCircle
          onClick={() => {
            setIsCreateBannerModalOpen(false);
            setIsEditBannerModalOpen(false);
          }}
          className="cursor-pointer"
          size={24}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">Banner Media (Image or Video)</label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="block w-full border rounded px-4 py-2"
          />
          {preview && (
            <div className="mt-2">
              {isVideo ? (
              <div className="h-40 w-full ">
                  <video src={preview} controls className="h-full w-full object-contain rounded" />
              </div>
              ) : (
                <div className="h-40 w-full overflow-hidden">
                    <img src={preview} alt="Preview" className="h-full w-full object-contain rounded" />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Heading */}
        <div>
          <label className="block text-sm font-medium mb-1">Heading</label>
          <input
            {...register("heading", { required: "Heading is required" })}
            type="text"
            placeholder="Enter heading"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.heading && (
            <p className="text-red-500 text-sm">{errors.heading.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            rows={3}
            placeholder="Enter description"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Route */}
        <div>
          <label className="block text-sm font-medium mb-1">Route</label>
          <input
            {...register("route", {
              required: "Route is required",
              pattern: {
                value: /^\/[a-zA-Z0-9-_]+$/,
                message: "Enter a valid route like /about-us",
              },
            })}
            type="text"
            placeholder="/your-route"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.route && (
            <p className="text-red-500 text-sm">{errors.route.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isSubmitting
            ? isCreateBannerModalOpen
              ? "Creating..."
              : "Updating..."
            : isCreateBannerModalOpen
              ? "Create Banner"
              : "Update Banner"}
        </button>
      </form>
    </div>
  );
};

export default BannerForm;
