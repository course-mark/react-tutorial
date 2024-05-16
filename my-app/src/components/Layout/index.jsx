import Link from "next/link";
import React from "react";

function Layout({children}) {
  return (
    <div>
      {/* header */}
      <header className="bg-gray-800 text-white p-4 sticky top-0">
        <h1 className="text-2xl font-bold">User Management System</h1>
        {/* Navbar */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/users"> Users </Link>
            </li>
            <li>
              <Link href="/settings"> Settings </Link>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  );
}

export default Layout;
