import { userDataAtom } from "@/store";
import { useAtom } from "jotai";
import Link from "next/link";
import React from "react";

function Layout({ children, userData }) {
  const [userData] = useAtom(userDataAtom); // same as above

  return (
    <div>
      {/* header */}
      <p className="col-span-3 text-center">
            Total Users: {userData.length}
          </p>
      <header className="bg-gray-800 text-white p-4 sticky top-0">
        <h1 className="text-2xl font-bold">User Management System</h1>
        {/* Navbar */}
        {userData.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
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
