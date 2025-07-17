// app/admin-panel/layout.tsx

"use client";

import LogoutModal from "@/components/LogoutModal";
import { useCreate } from "@/hooks/useCreate";
import useAppStore from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLogoutModalOpen, setIsLogoutModalOpen } = useAppStore();
  const logoutMutation = useCreate("/auth/logout", "logout");
  const handleLogout = () => {
    try {
      logoutMutation.mutate(
        {},
        {
          onSuccess: () => {
            toast.success("Logged out successfully");
            setIsLogoutModalOpen(false);
            router.push("/admin/login");
          },
          onError: () => {
            toast.error("Logout failed. Try again.");
          },
        }
      );
    } catch (error) {
      toast.error("Unexpected error occurred.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-71px)]">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-900 text-white">
        <h4 className=" font-bold">
          <Link
            className="inline"
            style={{ textDecoration: "none", color: "white" }}
            href="/admin/panel/dashboard"
          >
            Admin Panel
          </Link>
        </h4>
        <div className="">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 p-2 bg-gray-900 text-white pt-5 px-4 absolute md:relative z-50 md:z-auto md:translate-x-0 top-[135px] border-t md:top-0 left-0 md:left-auto transition-all duration-300`}
      >
        <h4 className="text-md md:pb-3 font-bold hidden md:block">
          <Link href="/admin/panel/dashboard" className="text-white">
            Admin Panel
          </Link>
        </h4>
        <div className="flex flex-col  md:h-[calc(100vh-200px)] justify-center gap-[-100px]   md:justify-between">
          <ul className="flex flex-col items-start justify-start -left-8 md:mt-10 relative md:bottom-0 rounded-lg bottom-6 gap-2  mb-0 text-white">
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="hover:border-b pb-1"
                href="/admin/panel/logo"
                onClick={() => setSidebarOpen(false)}
              >
                Logo
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="hover:border-b pb-1"
                href="/admin/panel/banner"
                onClick={() => setSidebarOpen(false)}
              >
                Banner
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="hover:border-b pb-1"
                href="/admin/panel/services"
                onClick={() => setSidebarOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="hover:border-b pb-1"
                href="/admin/panel/career"
                onClick={() => setSidebarOpen(false)}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="hover:border-b pb-1"
                href="/admin/panel/insights"
                onClick={() => setSidebarOpen(false)}
              >
                Insights
              </Link>
            </li>
          </ul>
          <div className="flex md:justify-end md:items-end">
            <button
              onClick={() => {
                setIsLogoutModalOpen(true);
              }}
              style={{ borderRadius: "12px" }}
              className="bg-red-600 px-3 py-2 hover:opacity-80 transition-all rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 overflow-y-auto ">{children}</main>

      {isLogoutModalOpen && (
        <div className="backdrop:brightness-50 mx-10 backdrop-filter">
          <LogoutModal
            isOpen={isLogoutModalOpen}
            onClose={() => setIsLogoutModalOpen(false)}
            onLogout={handleLogout}
          />
        </div>
      )}
    </div>
  );
}
