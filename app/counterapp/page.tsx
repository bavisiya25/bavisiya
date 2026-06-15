"use client";

import { useState } from "react";
import Link from "next/link";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const code = `"use client";

import { useState } from "react";
import Link from "next/link";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
`;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-8">
      {/* Header Buttons */}
      <div className="mb-6 flex gap-3">
        <Link
          href="/"
          className="px-4 py-2 bg-yellow-600 text-white rounded"
        >
          Home
        </Link>

        <button
          onClick={() => setShowCode(!showCode)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Source Code
        </button>
      </div>

      {/* Source Code Box */}
      {showCode && (
        <div className="mb-6">
          <pre className="bg-black text-white p-4 rounded overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      )}

      {/* Counter Card */}
      <section
        className="bg-white rounded-3xl shadow p-8"
        style={{ fontFamily: "Times New Roman, Times, serif" }}
      >
        <div className="bg-slate-400 text-white rounded-xl p-4 mb-4">
          <h1 className="text-3xl font-bold text-center">
            Counter: {count}
          </h1>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-black rounded"
          >
            +
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-black rounded"
          >
            -
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-blue-500 text-black rounded"
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}