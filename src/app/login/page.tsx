"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await login(email, password);

      localStorage.setItem("token", res.token);

      alert("Login success");
      router.push("/");
    } catch (err: any) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center">

      {/* Title */}
      <h1 className="text-5xl font-bold mt-[100px]">
        SpaceFlow
      </h1>

      <p className="text-gray-500 text-2xl mt-6">
        Book your perfect co-working spot
      </p>

      {/* Card */}
      <div className="w-[690px] mt-[80px] border border-gray-300 rounded-xl p-10 shadow-sm">

        <h2 className="text-3xl font-bold text-center">
          Log in
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Enter your credentials to continue
        </p>

        {/* Email */}
        <label className="text-lg">Email</label>
        <input
          type="email"
          className="w-full h-[66px] bg-gray-200 border border-gray-500 rounded-lg px-4 mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="text-lg">Password</label>
        <input
          type="password"
          className="w-full h-[66px] bg-gray-200 border border-gray-500 rounded-lg px-4 mb-8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full h-[66px] bg-blue-900 text-white text-xl rounded-lg hover:bg-blue-800"
        >
          Log in
        </button>

        {/* Register */}
        <p className="text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}