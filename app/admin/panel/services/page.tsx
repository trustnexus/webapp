"use client";
import DeleteModal from "@/components/DeleteModal";

import ServicesForm from "@/components/Services/ServiceForm";
import { useFetch } from "@/hooks/useFetch";
import useAppStore from "@/store/store";
import { ServiceForm } from "@/types/types";
import Link from "next/link";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

export default function AdminServicesPage() {
  const {
    isCreateServiceModalOpen,
    setIsCreateServiceModalOpen,
    setIsEditServiceModalOpen,
    isEditServiceModalOpen,
    setIsDeleteServiceModalOpen,
    isDeleteServiceModalOpen,
    services,
    setServices,
    setSelectedService,
  } = useAppStore();

  const { data, isLoading } = useFetch<{ data: ServiceForm[] }>(
    "/services",
    "services"
  );

  useEffect(() => {
    if (data && data.data) {
      setServices(data?.data);
    }
  }, [data]);

  return (
    <div className="relative p-3  min-h-[calc(100vh-71px)]">
      <h3 className="text-2xl font-bold">Manage Services</h3>

      <button
        style={{ borderRadius: "10px" }}
        className="bg-blue-400 text-white px-2 py-2 rounded-lg"
        onClick={() => {
          setIsCreateServiceModalOpen(true);
        }}
      >
        Add Service
      </button>
      <hr />

      <div className="">
        <div className="my-4">
          <h5>Services list</h5>
        </div>
        <div className="">
          {isLoading ? (
            <p>Loading services...</p>
          ) : (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {services?.map((service, index) => {
                return (
                  <div key={index} className="border-2 relative rounded-lg p-3">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <Link
                      style={{ textDecoration: "none" }}
                      className="hover:border-b border-b-[1px] border-b-transparent py-1"
                      href={service.route}
                    >
                      Learn more
                    </Link>
                    <div className="absolute top-4 right-4 flex gap-2 items-center justify-center">
                      <FaEdit
                        onClick={() => {
                          setIsEditServiceModalOpen(true);
                          setSelectedService(service);
                        }}
                        size={26}
                        className="cursor-pointer text-yellow-500"
                      />
                      <MdOutlineDelete
                        onClick={() => {
                          setIsDeleteServiceModalOpen(true);
                          setSelectedService(service);
                        }}
                        size={26}
                        className="cursor-pointer text-red-500"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {isCreateServiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
          <ServicesForm />
        </div>
      )}
      {isEditServiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
          <ServicesForm />
        </div>
      )}
      {isDeleteServiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
          <DeleteModal />
        </div>
      )}
    </div>
  );
}
