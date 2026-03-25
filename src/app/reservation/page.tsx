"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import ProtectedRoute from "@/components/ProtectedRoute"
import { getMyReservations, deleteReservation } from "@/lib/api"

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
        setData(res.data || [])
      })
      .catch(() => alert("โหลดข้อมูลไม่ได้"))
      .finally(() => setLoading(false))
  }, [user])

  const handleDelete = async (id: string) => {
    if (!user?.token) return

    if (!confirm("ต้องการลบการจองนี้?")) return

    try {
      await deleteReservation(id, user.token)
      setData((prev) => prev.filter((item) => item._id !== id))
    } catch {
      alert("ลบไม่สำเร็จ")
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">My Reservations</h1>

        {loading && (
          <div className="text-center text-gray-500">Loading...</div>
        )}

        {!loading && data.length === 0 && (
          <div className="text-center text-gray-400">
            No reservations found
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((r) => (
            <div
              key={r._id}
              className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">
                  {r.coworkingSpace?.name || "No name"}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  📍 {r.coworkingSpace?.address || "-"}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  📅 {new Date(r.date).toLocaleDateString()}
                </p>
              </div>

              <button
                onClick={() => handleDelete(r._id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  )
}