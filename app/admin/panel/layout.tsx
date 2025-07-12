// app/admin-panel/layout.tsx

import Link from "next/link";



export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="flex h-[calc(100vh-71px)]">
      {/* Sidebar */}
      <aside className="w-64 flex items-start  flex-col bg-gray-900 text-white pt-5 px-3">
        <h4 className="text-md font-bold mb-2"><Link style={{textDecoration:'none',color:'white'}} href={'/admin/panel/dashboard'}>Admin Panel</Link></h4>
        <ul className="flex flex-col  space-y-3">

          <li><Link href="/admin/panel/logo">Logo</Link></li>
                    <li><Link href="/admin/panel/banner">Banner</Link></li>

          <li><Link href="/admin/panel/services">Services</Link></li>
          <li><Link href="/admin/panel/career">Careers</Link></li>
          <li><Link href="/admin/panel/insights">Insights</Link></li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 overflow-y-auto">{children}</main>
    </div>

  );
}
