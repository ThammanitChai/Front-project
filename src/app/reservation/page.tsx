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
    if (!user?.token) {
      setLoading(false)
      return
    }

    getMyReservations(user.token)
      .then((res) => {
        console.log("RESERVATION RESPONSE:", res)

        setData(res.data || [])
      })
      .catch((err) => {
        console.log("ERROR:", err)
        alert("โหลดข้อมูลไม่ได้")
      })
      .finally(() => setLoading(false))

  }, [user])

  const handleDelete = async (id: string) => {
    if (!user?.token) return

    try {
      await deleteReservation(id, user.token)
      setData(prev => prev.filter(item => item._id !== id))
    } catch (err) {
      console.log("DELETE ERROR:", err)
      alert("ลบไม่สำเร็จ")
    }
  }

  return (
    <ProtectedRoute>
      <div style={{ padding: 20 }}>
        <h1>My Reservations</h1>

        {loading && <p>Loading...</p>}

        {!loading && data.length === 0 && (
          <p>No reservations found</p>
        )}

        {data.map((r) => (
          <div key={r._id} style={{ marginBottom: 10 }}>
            <p>{r.name || r.coworkingSpace?.name || "No name"}</p>

            <button onClick={() => handleDelete(r._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </ProtectedRoute>
  )
}