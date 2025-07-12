// app/admin-panel/layout.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-71px)]">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-900 text-white">
        <h4 className=" font-bold">
          <Link style={{textDecoration:'none', color:'white'}} href="/admin/panel/dashboard">Admin Panel</Link>
        </h4>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-gray-900 text-white pt-5 px-4 absolute md:relative z-50 md:z-auto md:translate-x-0 top-[135px] border-t md:top-0 left-0 md:left-auto transition-all duration-300`}
      >
        <h4 className="text-md font-bold mb-4 hidden md:block">
          <Link href="/admin/panel/dashboard" className="text-white">
            Admin Panel
          </Link>
        </h4>
        <ul className="flex flex-col space-y-4 text-white">
          <li>
            <Link href="/admin/panel/logo" onClick={() => setSidebarOpen(false)}>
              Logo
            </Link>
          </li>
          <li>
            <Link href="/admin/panel/banner" onClick={() => setSidebarOpen(false)}>
              Banner
            </Link>
          </li>
          <li>
            <Link href="/admin/panel/services" onClick={() => setSidebarOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/admin/panel/career" onClick={() => setSidebarOpen(false)}>
              Careers
            </Link>
          </li>
          <li>
            <Link href="/admin/panel/insights" onClick={() => setSidebarOpen(false)}>
              Insights
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 overflow-y-auto px-3 py-2">
        {children}
      </main>
    </div>
  );
}
