import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ClientLayout from "./ClientLayout";
import { QueryProvider } from "@/providers/QueryProvider";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Trust Nexus",
  description: "Generated by create next app",
  icons: {
    icon: "/web-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <QueryProvider>
          <ClientLayout>{children}</ClientLayout>
          <ToastContainer position="top-right" autoClose={2000} />
        </QueryProvider>
      </body>
    </html>
  );
}
