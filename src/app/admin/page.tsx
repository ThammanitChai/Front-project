"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import ProtectedRoute from "@/components/ProtectedRoute"
import { getAllReservations } from "@/lib/api"

export default function AdminPage() {
  const { user } = useAuth()
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    if (!user) return

    if (user.role !== "admin") {
      alert("Access denied")
      return
    }

    getAllReservations(user.token).then(setData)
  }, [user])

  return (
    <ProtectedRoute>
      <div>
        <h1>Admin Panel</h1>

        {data.map(r => (
          <div key={r._id}>
            <p>{r.name}</p>
          </div>
        ))}
      </div>
    </ProtectedRoute>
  )
}