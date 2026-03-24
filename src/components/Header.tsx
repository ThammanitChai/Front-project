"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"

export default function Header() {
  const { user, setUser } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")

    setUser(null)
    router.push("/login")
  }

  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      <Link href="/">Home</Link>

      {user ? (
        <>
          <Link href="/reservation">My Booking</Link>

          {user.role === "admin" && (
            <Link href="/admin">Admin</Link>
          )}

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      )}
    </nav>
  )
}