'use client'

import { Calendar } from "lucide-react"

export default function myReservation() {
  const reservations: any[] = [] // mock (ยังไม่มีข้อมูล)

  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-foreground">
          My Reservations
        </h1>
        <p className="mt-2 text-xl text-gray-400">
          {reservations.length}/3 reservations used
        </p>
      </div>

      {reservations.length === 0 && (
        <div className="flex h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-500 bg-gray-300 text-center">
          
          <div className="mb-4">
            <Calendar className="h-10 w-10 text-gray-400" />
          </div>

          <h2 className="text-lg font-semibold text-gray-700">
            No reservations yet
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Browse co-working spaces to make your first booking
          </p>
        </div>
      )}
    </div>
  )
}