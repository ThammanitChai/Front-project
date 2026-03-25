"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import ProtectedRoute from "@/components/ProtectedRoute"
import { getAllReservations } from "@/lib/api"

export default function AdminPage() {
  const { user } = useAuth()
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    if (user.role !== "admin") {
      alert("Access denied")
      return
    }

    getAllReservations(user.token)
      .then((res) => {
        setData(res.data || [])
      })
      .catch((err) => {
        console.error("API ERROR:", err)
      })
      .finally(() => setLoading(false))
  }, [user])

  if (!user || loading) return <p className="p-6">Loading...</p>

  const grouped = data.reduce((acc: any, curr: any) => {
    const spaceName = curr.coworkingSpace?.name || "Unknown Space"

    if (!acc[spaceName]) {
      acc[spaceName] = []
    }

    acc[spaceName].push(curr)
    return acc
  }, {})

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-8">

        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Admin Dashboard
        </h1>

        {data.length === 0 && (
          <p className="text-gray-500">No reservations found</p>
        )}

        <div className="grid gap-6">

          {Object.entries(grouped).map(([spaceName, reservations]: any) => (

            <div
              key={spaceName}
              className="bg-white rounded-2xl shadow p-6"
            >

              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                {spaceName}
              </h2>

              <div className="space-y-3">

                {reservations.map((r: any) => (
                  <div
                    key={r._id}
                    className="flex justify-between items-center border p-4 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-800">
                        User: {r.user?.name || "Unknown"}
                      </p>

                      <p className="text-gray-500 text-sm">
                        {r.user?.email}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-700 font-medium">
                        {new Date(r.reservationDate).toLocaleDateString("th-TH")}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </ProtectedRoute>
  )
}