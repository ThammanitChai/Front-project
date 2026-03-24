"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("user")

  const handleRegister = () => {
    if (!name || !tel || !email || !password) {
      alert("Please fill all fields")
      return
    }

    alert("Register success ✅")
    router.push("/login")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white pt-24">

      <h1 className="text-5xl font-bold mb-4">
        SpaceFlow
      </h1>

      <p className="text-gray-500 text-xl mb-10">
        Book your perfect co-working spot
      </p>

      <div className="w-[690px] border border-gray-300 rounded-xl p-10 shadow-sm">

        <h2 className="text-3xl font-bold text-center mb-2">
          Register
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Fill in your details to get started
        </p>

        <label className="text-lg">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-[66px] bg-gray-200 border border-gray-500 rounded-lg px-4 mb-6"
        />

        <label className="text-lg">Telephone</label>
        <input
          type="text"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          className="w-full h-[66px] bg-gray-200 border border-gray-500 rounded-lg px-4 mb-6"
        />

        <label className="text-lg">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[66px] bg-gray-200 border border-gray-500 rounded-lg px-4 mb-6"
        />

        <label className="text-lg">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[66px] bg-gray-200 border border-gray-500 rounded-lg px-4 mb-6"
        />

        <label className="text-lg">Select Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full h-[66px] bg-gray-200 border border-gray-500 rounded-lg px-4 mb-8"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={handleRegister}
          className="w-full h-[66px] bg-blue-900 text-white text-xl rounded-lg hover:bg-blue-800"
        >
          Create Account
        </button>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Log in
          </span>
        </p>

      </div>
    </div>
  )
}