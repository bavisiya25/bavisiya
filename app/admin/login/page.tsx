"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

 const handleLogin = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    setLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch(
      "https://sbstechnologies.in/cloud/mobile/login/check_user_login.php",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (result.status === true) {
      localStorage.setItem(
        "user",
        JSON.stringify(result.data)
      );

      router.push("/admin/dashboard");
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-r border-gray-300 text-purple-600">
              <MdEmail />
            </div>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Password
          </label>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-r border-gray-300 text-purple-600">
              <FaLock />
            </div>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-4 py-3 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="px-4 py-3 text-purple-600"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-500"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link
            href="/admin/registration"
            className="text-purple-600 font-semibold"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}