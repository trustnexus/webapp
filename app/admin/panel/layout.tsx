// app/admin-panel/layout.tsx

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin panel layout",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white pt-10 px-3">
        <h4 className="text-md font-bold mb-6">Admin Dashboard</h4>
        <ul className="space-y-3">
          <li><Link href="/admin-panel/services">Services</Link></li>
          <li><Link href="/admin-panel/careers">Careers</Link></li>
          <li><Link href="/admin-panel/insights">Insights</Link></li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">{children}</main>
    </div>

  );
}
