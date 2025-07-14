"use client";

import useAppStore from "@/store/store";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";

type InsightFormInputs = {
  category: string;
  heading: string;
  link: string;
};

const categories = [
  "Case Studies",
  "Newsroom",
  "Whitepapers/eBooks",
  "Blogs",
];

const InsightForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InsightFormInputs>();

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const {
    isCreateAnInsightModalOpen,
    isEditAnInsightModalOpen,
setIsEditAnInsightModalOpen,    setIsCreateAnInsightModalOpen
  } = useAppStore();

  const onSubmit = (data: InsightFormInputs) => {
    console.log("Form Data:", data);
    console.log("Uploaded File:", file);
    // API request logic here
  };

  return (
    <div  className="border-2 border-gray-400 max-w-[800px] mx-auto mt-20 p-6 backdrop:brightness-50  bg-white rounded shadow ">
      <div className="">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-lg font-bold">
            {isCreateAnInsightModalOpen ? "Add Insight" : "Edit Insight"}
          </p>
          <IoMdCloseCircle
            onClick={() => {
              isCreateAnInsightModalOpen && setIsCreateAnInsightModalOpen(false);
              isEditAnInsightModalOpen && setIsEditAnInsightModalOpen(false);
            }}
            className="cursor-pointer"
            size={24}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              {...register("category", { required: "Category is required" })}
              defaultValue=""
              className="w-full px-4 py-2 border rounded"
            >
              <option value="" disabled>
                Select a Category
              </option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full px-4 py-2 border rounded"
            />
            {preview && (
              <div className="mt-2 h-40 w-full overflow-hidden">
                <img
                  src={preview}
                  alt="Preview"
                  className="h-full w-full object-contain rounded"
                />
              </div>
            )}
          </div>

          {/* Heading */}
          <div>
            <label className="block text-sm font-medium mb-1">Heading</label>
            <input
              {...register("heading", { required: "Heading is required" })}
              type="text"
              className="w-full px-4 py-2 border rounded"
              placeholder="Enter insight heading"
            />
            {errors.heading && (
              <p className="text-red-500 text-sm">{errors.heading.message}</p>
            )}
          </div>

          {/* Route */}
          <div>
            <label className="block text-sm font-medium mb-1">Route</label>
            <input
              {...register("link", {
                required: "Route is required",
                pattern: {
                  value: /^\/[a-zA-Z0-9\-\/]*$/,
                  message:
                    "Route must start with '/' and contain valid characters",
                },
              })}
              type="text"
              placeholder="/insights/article-slug"
              className="w-full px-4 py-2 border rounded"
            />
            {errors.link && (
              <p className="text-red-500 text-sm">{errors.link.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {isSubmitting
              ? isCreateAnInsightModalOpen
                ? "Creating..."
                : "Updating..."
              : isCreateAnInsightModalOpen
              ? "Create"
              : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InsightForm;
