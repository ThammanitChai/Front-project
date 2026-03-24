"use client"

import { useState, useContext } from "react"
import { useRouter } from "next/navigation"
import { TextField } from "@mui/material"
import Link from "next/link"
import { AuthContext } from "@/context/AuthContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { setUser } = useContext(AuthContext)

  const handleLogin = async (e: any) => {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      // 🔥 เก็บ token + role
      localStorage.setItem("token", data.token)
      localStorage.setItem("role", data.role)

      // 🔥 update context ทันที
      setUser({ token: data.token, role: data.role })

      router.push("/spaces")

    } catch (err) {
      alert("Login failed")
    }
  }

  return (
    <main className="w-full flex flex-col items-center justify-center mt-10">
      <div className="text-5xl font-bold">SpaceFlow</div>
      <div className="mt-3">Book your perfect co-working spot</div>

      <form onSubmit={handleLogin} className="flex flex-col items-center gap-6 mt-8">
        <div className="text-2xl font-bold">Log in</div>

        <TextField
          className="w-[20vw]"
          variant="standard"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          className="w-[20vw]"
          variant="standard"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link href="/register" className="text-blue-700">
          Don't have an account yet?
        </Link>

        <button
          type="submit"
          className="bg-sky-700 text-white w-[20vw] h-12 rounded-lg"
        >
          Log in
        </button>
      </form>
    </main>
  )
}