import { useDelete } from "@/hooks/useDelete";
import useAppStore from "@/store/store";
import { isAxiosError } from "axios";
import React from "react";
import { toast } from "react-toastify";

const DeleteModal = () => {
  const {
    isDeleteBannerModalOpen,
    setIsDeleteBannerModalOpen,
    isDeleteLogoModalOpen,
    setIsDeleteLogoModalOpen,
    isDeleteServiceModalOpen,
    setIsDeleteServiceModalOpen,
    selectedBanner,
    setIsDeleteAnInsightModalOpen,
    isDeleteAnInsightModalOpen,
    setSelectedBanner,
    selectedService,
    setSelectedService,
  } = useAppStore();
  const deleteBannerMutation = useDelete("/banners", "banners");
  const deleteServiceMutation = useDelete("/services", "services");
  const handleBannerDelete = () => {
    try {
      const bannerId = selectedBanner?.id;
      if (!bannerId) {
        toast.error("Invalid banner ID");
        return;
      }
      deleteBannerMutation.mutate(bannerId, {
        onSuccess: () => {
          toast.success("Banner deleted successfully");
          setSelectedBanner(null);
          setIsDeleteBannerModalOpen(false);
        },
        onError: (error: unknown) => {
          if (isAxiosError(error)) {
            toast.error(error.response?.data?.message || "Delete failed");
          } else {
            toast.error("An unexpected error occurred.");
          }
        },
      }); // ✅ Pass string, not object
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleServiceDelete = () => {
    try {
      const serviceId = selectedService?.id;
      if (!serviceId) {
        toast.error("Invalid service ID");
        return;
      }
      deleteServiceMutation.mutate(serviceId, {
        onSuccess: () => {
          toast.success("Service deleted successfully");
          setSelectedService(null);
          setIsDeleteServiceModalOpen(false);
        },
        onError: (error: unknown) => {
          if (isAxiosError(error)) {
            toast.error(error.response?.data?.message || "Delete failed");
          } else {
            toast.error("An unexpected error occurred.");
          }
        },
      }); // ✅ Pass string, not object
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex mx-auto items-center h-full my-auto backdrop:brightness-50 justify-center max-w-[600px] rounded-lg">
      <div className="p-3 border-2 rounded-lg bg-white">
        <p>
          Are you sure you want to delete this {isDeleteLogoModalOpen && "logo"}{" "}
          {isDeleteBannerModalOpen && "banner"}{" "}
          {isDeleteServiceModalOpen && "service"}
          {isDeleteAnInsightModalOpen && "insight"}
        </p>

        <div className="flex items-center justify-end gap-3 mt-4">
          <button
            onClick={() => {
              if (isDeleteBannerModalOpen) {
                handleBannerDelete();
              } else if (isDeleteServiceModalOpen) {
                handleServiceDelete();
              }
            }}
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
              {
                isDeleteAnInsightModalOpen &&
                  setIsDeleteAnInsightModalOpen(false);
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
