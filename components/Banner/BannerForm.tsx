"use client";

import useAppStore from "@/store/store";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { selectDropDownOptions } from "./selectDropDownOptions";
import { Banner } from "@/types/types";
import { useUpdate } from "@/hooks/useUpdate";
import { useCreate } from "@/hooks/useCreate";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

const BannerForm = () => {
  const {
    setIsCreateBannerModalOpen,
    setIsEditBannerModalOpen,
    isCreateBannerModalOpen,
    selectedBanner,
    setSelectedBanner,
  } = useAppStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Banner>({
    defaultValues: {
      category: selectedBanner?.category || "",
      heading: selectedBanner?.heading || "",
      description: selectedBanner?.description || "",
      route: selectedBanner?.route || "",
      media_url: selectedBanner?.media_url || "",
    },
  });

  useEffect(() => {
    if (selectedBanner) {
      reset(selectedBanner); // ⬅️ Prefill form
      setPreview(selectedBanner.media_url || null); // 👈 Show existing media
    }
  }, [selectedBanner, reset]);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const isEditing = !!selectedBanner;
  const updateBanner = useUpdate<Banner>("/banners", "banners");
  const createBanner = useCreate<Banner>("/banners", "banners");

  const onSubmit = async (data: Banner) => {
    try {
      const formData = new FormData();
      formData.append("category", data.category);
      formData.append("heading", data.heading);
      formData.append("description", data.description);
      formData.append("route", data.route || "");

      if (file) {
        formData.append("media_url", file); // must match backend field name
      }

      if (isEditing) {
        // Use raw object if your backend expects JSON
        updateBanner.mutate(
          { ...data, id: selectedBanner?.id },
          {
            onSuccess: () => {
              toast.success("Banner updated successfully");
              setSelectedBanner(null);
              setIsEditBannerModalOpen(false);
            },
            onError: (error: unknown) => {
              if (isAxiosError(error)) {
                toast.error(error.response?.data?.message || "Update failed");
              } else {
                toast.error("An unexpected error occurred.");
              }
            },
          }
        );
      } else {
        // Send formData instead of data
        createBanner.mutate(formData, {
          onSuccess: () => {
            toast.success("Banner created successfully");
            setSelectedBanner(null);
            setIsCreateBannerModalOpen(false);
          },
          onError: (error: unknown) => {
            if (isAxiosError(error)) {
              toast.error(error.response?.data?.message || "Creation failed");
              console.log(error);
            } else {
              toast.error("An unexpected error occurred.");
            }
          },
        });
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  console.log("preview", preview);
  const isVideo = file?.type.startsWith("video");

  return (
    <div className="border-2 border-gray-400 max-w-[800px] mx-auto mt-10 p-6 backdrop:brightness-50  bg-white rounded shadow ">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-bold">
          {isCreateBannerModalOpen ? "Add Banner" : "Edit Banner"}
        </div>
        <div className="">
          <IoMdCloseCircle
            onClick={() => {
              setIsCreateBannerModalOpen(false);
              setIsEditBannerModalOpen(false);
            }}
            className="cursor-pointer"
            size={24}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Select Page (Category)
          </label>
          <select
            className="rounded block w-full border px-4 py-2"
            {...register("category", {
              required: "Please select a page",
              validate: (value) => value !== "" || "Please select a valid page",
            })}
            defaultValue="" // ← default selected is empty
          >
            <option value="" disabled>
              Select a Page
            </option>
            {selectDropDownOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Banner Media (Image or Video)
          </label>
          <input
            type="file"
            name="media"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="block w-full border rounded px-4 py-2"
          />
          {preview && (
            <div className="mt-2">
              {isVideo ? (
                <div className="h-40 w-full ">
                  <video
                    src={preview}
                    controls
                    className="h-full w-full object-contain rounded"
                  />
                </div>
              ) : (
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-contain rounded"
                  />
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
          <label className="block text-sm font-medium mb-1">
            Route (optional)
          </label>
          <input
            {...register("route", {
              pattern: {
                value: /^\/[a-zA-Z0-9-_]*$/, // slash se start ho, baqi optional hai
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
