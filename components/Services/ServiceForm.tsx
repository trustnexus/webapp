"use client";

import useAppStore from "@/store/store";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect } from "react";
import { ServiceForm } from "@/types/types";
import { useUpdate } from "@/hooks/useUpdate";
import { useCreate } from "@/hooks/useCreate";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

const ServicesForm = () => {
  const {
    setIsCreateServiceModalOpen,
    setIsEditServiceModalOpen,
    isCreateServiceModalOpen,
    selectedService,
    setSelectedService,
  } = useAppStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceForm>({
    defaultValues: {
      title: selectedService?.title || "",
      description: selectedService?.description || "",
      route: selectedService?.route || "",
    },
  });

  useEffect(() => {
    if (selectedService) {
      reset(selectedService);
    }
  }, [selectedService, reset]);

  const isEditing = !!selectedService;
  const updateService = useUpdate("/services", "services");
  const createService = useCreate<ServiceForm>("/services", "services");
  const isMutating = isEditing
    ? updateService.isPending
    : createService.isPending;
  const onSubmit = async (data: ServiceForm) => {
    try {
      if (isEditing) {
        updateService.mutate(
          { ...data, id: selectedService?.id || "" },
          {
            onSuccess: () => {
              toast.success("Service updated successfully");
              setSelectedService(null);
              setIsEditServiceModalOpen(false);
            },
            onError: handleError,
          }
        );
      } else {
        createService.mutate(data, {
          onSuccess: () => {
            toast.success("Service created successfully");
            setSelectedService(null);
            setIsCreateServiceModalOpen(false);
          },
          onError: handleError,
        });
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handleError = (error: unknown) => {
    if (isAxiosError(error)) {
      const errors = error.response?.data?.errors;
      if (Array.isArray(errors)) {
        errors.forEach((err) => toast.error(err.msg));
      } else {
        toast.error(error.response?.data?.message || "Request failed");
      }
    } else {
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="border-2 border-gray-400 max-w-[800px] mx-auto mt-10 p-6 backdrop:brightness-50 bg-white rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-bold">
          {isCreateServiceModalOpen ? "Add Service" : "Edit Service"}
        </div>
        <IoMdCloseCircle
          onClick={() => {
            setIsCreateServiceModalOpen(false);
            setIsEditServiceModalOpen(false);
            setSelectedService(null);
          }}
          className="cursor-pointer"
          size={24}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Service Heading
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Enter service heading"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
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
            placeholder="Enter service description"
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
              pattern: {
                value: /^\/[a-zA-Z0-9-_]*$/,
                message: "Enter a valid route like /your-service",
              },
            })}
            type="text"
            placeholder="/learn-more"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.route && (
            <p className="text-red-500 text-sm">{errors.route.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isMutating}
          className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${
            isMutating ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isMutating
            ? isCreateServiceModalOpen
              ? "Creating..."
              : "Updating..."
            : isCreateServiceModalOpen
            ? "Create Service"
            : "Update Service"}
        </button>
      </form>
    </div>
  );
};

export default ServicesForm;
