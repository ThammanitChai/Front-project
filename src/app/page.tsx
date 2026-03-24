"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { Home, CalendarDays, Shield, LogOut, LogIn, UserPlus } from "lucide-react"

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
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur px-8 py-4 flex items-center justify-between shadow-sm">

      <Link href="/" className="text-2xl font-extrabold flex items-center gap-2">
        <Home size={24} />
        SpaceFlow
      </Link>

      <div className="flex items-center gap-6">

        {user ? (
          <>
            <Link 
              href="/reservation" 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
              My Booking
            </Link>

            {user.role === "admin" && (
              <Link 
                href="/admin" 
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Shield size={18} />
                Admin
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <LogOut size={18} />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
             
              Login
            </Link>

            <Link
              href="/register"
              className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
             
              Get Started
            </Link>
          </>
        )}

      </div>
    </nav>
  )
}