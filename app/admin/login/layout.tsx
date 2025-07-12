import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | Trust Nexus",
  description: "Admin panel layout",
};

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // plain layout
}
