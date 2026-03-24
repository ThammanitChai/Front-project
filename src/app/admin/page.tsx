"use client"

import { useEffect, useState } from "react"

export default function AdminPage() {
  const [bookings, setBookings] = useState<any[]>([])

  useEffect(() => {
    const token = localStorage.getItem("token")

    fetch("http://localhost:3000/api/booking", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(setBookings)
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-600">Admin Dashboard</h1>

      {bookings.map((b) => (
        <div key={b.id} className="border p-3 mt-3">
          Booking ID: {b.id}
        </div>
      ))}
    </div>
  )
}