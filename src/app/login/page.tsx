"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { login } from "@/lib/api"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useAuth()
  const router = useRouter()

  const handleLogin = async () => {
    console.log("LOGIN CLICKED") // 🔥 debug

    if (!email || !password) {
      alert("Please Fill Information")
      return
    }

    try {
      const res = await login(email, password)

      console.log("LOGIN RESPONSE:", res) // 🔥 debug

      // ✅ backend มักจะส่งแบบนี้
      // { success: true, token: "...", data: { role: ... } }

      const token = res.token || res.data?.token
      const role = res.role || res.data?.role || "user"

      if (!token) {
        alert("Login failed: no token")
        return
      }

      localStorage.setItem("token", token)
      localStorage.setItem("role", role)

      setUser({ token, role })

      alert("Login success 🚀")
      router.push("/")

    } catch (err: any) {
      console.log("LOGIN ERROR:", err)
      alert("Login failed")
    }
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
          Log in
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Enter your credentials to continue
        </p>

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
          className="w-full h-[66px] bg-gray-200 border border-gray-500 rounded-lg px-4 mb-8"
        />

        <button
          onClick={handleLogin}
          className="w-full h-[66px] bg-blue-900 text-white text-xl rounded-lg hover:bg-blue-800"
        >
          Log in
        </button>

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
  )
}