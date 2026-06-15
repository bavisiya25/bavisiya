"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchFilter() {
  const [search, setSearch] = useState("");
  const [showCode, setShowCode] = useState(false);

  const products = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
  ];

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const code = `"use client";

import { useState } from "react";

export default function SearchFilter() {
  const [search, setSearch] = useState("");

  const products = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
  ];

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
      />

      <ul>
        {filteredProducts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
`;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-8">
      
      {/* Header */}
      <div className="flex gap-4 mb-6">
        <Link
          href="/"
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg shadow"
        >
          Home
        </Link>

        <button
          onClick={() => setShowCode(!showCode)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow"
        >
          Source Code
        </button>
      </div>

      {/* Source Code */}
      {showCode && (
        <div className="mb-6">
          <pre className="bg-black text-white p-4 rounded-xl overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      )}

      {/* Search Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
          🔍 Search Filter
        </h1>

        <input
          type="text"
          placeholder="Search fruits..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-2 border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="mt-6 space-y-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <div
                key={index}
                className="bg-purple-100 p-4 rounded-xl shadow flex justify-between items-center"
              >
                <span className="text-lg font-medium">
                  🍎 {item}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center text-red-600 font-semibold">
              No products found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}