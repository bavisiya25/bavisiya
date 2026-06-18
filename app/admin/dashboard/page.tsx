"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <div className="text-7xl mb-4">
          ✅
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Login Successful
        </h1>

        <p className="text-gray-600 mb-8">
          Welcome to Dashboard
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-lg"
          >
            Home
          </Link>

          <Link
            href="/admin/login"
            className="bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            Logout
          </Link>
        </div>

      </div>
    </div>
  );
}