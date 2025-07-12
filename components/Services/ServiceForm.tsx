"use client";

import useAppStore from "@/store/store";
import React from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";

type ServiceFormInputs = {
  heading: string;
  description: string;
  link: string;
};

const ServiceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ServiceFormInputs>();

  const onSubmit = (data: ServiceFormInputs) => {
    console.log("Form Data:", data);
    console.log(isSubmitting);

    // yahan tum fetch ya axios se API pe bhej sakte ho
  };
  const {
    setIsCreateServiceModalOpen,
    isEditServiceModalOpen,
    isCreateServiceModalOpen,
    setIsEditServiceModalOpen,
  } = useAppStore();
  return (
    <div className=" backdrop:brightness-50">
      <div className="border-2 border-gray-400  h-full    max-w-[700px]  mx-auto mt-10 p-6 bg-white rounded shadow">
        <div className=" mb-4 flex items-center  justify-between">
          <p className="text-lg font-bold text-center my-auto">
            {isCreateServiceModalOpen && "Add Service"}{" "}
            {isEditServiceModalOpen && "Edit Service"}
          </p>
          <div className="">
            <IoMdCloseCircle
              onClick={() => {
                {
                  isEditServiceModalOpen && setIsEditServiceModalOpen(false);
                }
                {
                  isCreateServiceModalOpen &&
                    setIsCreateServiceModalOpen(false);
                }
              }}
              className="cursor-pointer"
              size={24}
            />
          </div>{" "}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Service Heading */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Heading
            </label>
            <input
              {...register("heading", { required: "Heading is required" })}
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service heading"
            />
            {errors.heading && (
              <p className="text-red-500 text-sm">{errors.heading.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Enter service description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/*  Route */}
          <div>
            <label className="block text-sm font-medium mb-1">Route</label>
            <input
              {...register("link", {
                required: "Route is required",
                pattern: {
                  value: /^\/[a-zA-Z0-9\-\/]*$/,
                  message: "Route must start with '/' and contain valid path",
                },
              })}
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g, /learn-more"
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
            {isCreateServiceModalOpen &&
              (isSubmitting ? "Creating..." : "Create")}
            {isEditServiceModalOpen &&
              (isSubmitting ? "Updating..." : "Update")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
