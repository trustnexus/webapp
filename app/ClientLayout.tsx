// app/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin/panel/');
console.log(isAdminRoute)
  return (
    <>
      { <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}
