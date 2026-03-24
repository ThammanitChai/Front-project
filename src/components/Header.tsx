"use client"

import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Header() {
  const { user, setUser } = useContext(AuthContext)
  const router = useRouter()

  const logout = () => {
    localStorage.clear()
    setUser(null)
    router.push("/login")
  }

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <div className="text-xl font-bold">SpaceFlow</div>

      <div className="flex gap-4 items-center">
        {!user && (
          <>
            <Link href="/login" className="hover:underline">Sign in</Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Get started
            </Link>
          </>
        )}

        {user && (
          <>
            <Link href="/spaces">Spaces</Link>
            <Link href="/reservation">My Reservation</Link>

            {user.role === "admin" && (
              <Link href="/admin" className="text-red-600 font-bold">
                Admin
              </Link>
            )}

            <button
              onClick={logout}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}