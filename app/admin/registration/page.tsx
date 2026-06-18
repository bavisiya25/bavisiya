"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaUser,
  FaAt,
  FaLock,
  FaCalendarAlt,
  FaEye,
  FaEyeSlash,

} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function RegistrationPage() {
  const router = useRouter();

  const [registered, setRegistered] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const {
      name,
      email,
      username,
      password,
      confirmPassword,
      dob,
      gender,
    } = formData;

    if (
      !name ||
      !email ||
      !username ||
      !password ||
      !confirmPassword ||
      !dob ||
      !gender
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setRegistered(true);
  };

  if (registered) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-xl text-center">

          <div className="text-8xl mb-6">
            ✅
          </div>

          <h1 className="text-4xl font-bold mb-3">
            Registration Successful!
          </h1>

          <p className="text-gray-500 mb-6">
            Welcome to our community 🎉
          </p>

          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-5xl mb-4">
            👤
          </div>

          <h2 className="text-2xl font-bold">
            {formData.name}
          </h2>

          <p className="text-gray-500">
            @{formData.username}
          </p>

          <p className="text-gray-500 mb-6">
            {formData.email}
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 mb-6">
            Your account has been created successfully.
          </div>

          <button
            onClick={() => router.push("/admin/login")}
            className="w-full h-12 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg"
          >
            Go to Login →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-xl border border-gray-100 p-10">


        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-4xl shadow-lg">
            👤
          </div>
        </div>

        <h1 className="text-center text-5xl font-bold text-slate-800">
          Create Your Account
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Join us today! Fill in the details to get started.
        </p>

        <form onSubmit={handleRegister}>
         <div className="mb-4">

          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Full Name
          </label>
  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
    <div className="px-4 py-3 bg-gray-50 border-r border-gray-300 text-purple-600">
      <FaUser />
    </div>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 outline-none"
          />
  </div>
</div>
<div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Email Address
          </label>
 <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
    <div className="px-4 py-3 bg-gray-50 border-r border-gray-300 text-purple-600">
        <MdEmail  />
    </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 outline-none"
          />
</div>
</div>
<div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Username
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
    <div className="px-4 py-3 bg-gray-50 border-r border-gray-300 text-purple-600">
        <FaAt  />
        </div>

          <input
            type="text"
            name="username"
            placeholder="Choose a username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 outline-none"
          />
          </div>
          </div>

<div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Password
          </label>
           <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
    <div className="px-4 py-3 bg-gray-50 border-r border-gray-300 text-purple-600">
        <FaLock  />
        </div>

          <input
            type="password"
            name="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 outline-none"
          />
           <div className="px-4 py-3  border-gray-300 text-purple-600 cursor-pointer">
      <FaEye size={16} />
    </div>
</div>
          </div>
          <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Confirm Password
          </label>
 <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
    <div className="px-4 py-3 bg-gray-50 border-r border-gray-300 text-purple-600">
        <FaLock  />
        </div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 outline-none"
          />
           <div className="px-4 py-3  border-gray-300 text-purple-600 cursor-pointer">
      <FaEye size={16} />
    </div>
</div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">

            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Date of Birth
              </label>
<div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
    <div className="px-4 py-3 bg-gray-50 border-r border-gray-300 text-purple-600">
        <FaCalendarAlt  />
        </div>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-4 py-3 outline-none"
              />
              
            </div>
</div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full h-12 border border-gray-200 rounded-xl px-4"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

          </div>

          <div className="flex items-center gap-2 mt-4 mb-6">
            <input type="checkbox" required />

            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-purple-600 font-medium">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-purple-600 font-medium">
                Privacy Policy
              </span>
            </span>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg"
          >
            Create Account
          </button>

          <p className="text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link
              href="/admin/login"
              className="text-purple-600 font-semibold"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}