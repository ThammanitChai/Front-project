"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import ProtectedRoute from "@/components/ProtectedRoute"
import {
  getMyReservations,
  deleteReservation
} from "@/lib/api"

export default function ReservationPage() {
  const { user } = useAuth()
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    getMyReservations(user.token)
      .then(setData)
      .catch(() => alert("โหลดข้อมูลไม่ได้"))
      .finally(() => setLoading(false))
  }, [user])

  const handleDelete = async (id: string) => {
    try {
      await deleteReservation(id, user.token)
      setData(prev => prev.filter(item => item._id !== id))
    } catch {
      alert("ลบไม่สำเร็จ")
    }
  }

  return (
    <ProtectedRoute>
      <div>
        <h1>My Reservations</h1>

        {loading && <p>Loading...</p>}

        {data.map(r => (
          <div key={r._id}>
            <p>{r.name}</p>
            <button onClick={() => handleDelete(r._id)}>Delete</button>
          </div>
        ))}
      </div>
    </ProtectedRoute>
  )
}