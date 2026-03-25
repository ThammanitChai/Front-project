"use client"

import { useEffect, useState } from "react"
import SpaceCardPanel from "@/components/SpacePanel"
import { useAuth } from "@/context/AuthContext"
import { createReservation } from "@/lib/api"

type Space = {
  _id: string
  name: string
  address: string
  tel: string
  openTime: string
  closeTime: string
}

export default function BrowsePage() {
  const { user } = useAuth()

  const [spaces, setSpaces] = useState<Space[]>([])
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null)
  const [date, setDate] = useState("")

  // 🔥 โหลด spaces จาก backend
  useEffect(() => {
    fetch("https://project-backend-production-5f11.up.railway.app/api/v1/spaces")
      .then((res) => res.json())
      .then((data) => {
        console.log("SPACES:", data)
        setSpaces(data.data || [])
      })
      .catch(() => alert("โหลด spaces ไม่ได้"))
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Co-Working Spaces
        </h1>
        <p className="text-gray-500 text-xl mt-3">
          Find and reserve your ideal workspace
        </p>
      </div>

      {/* SPACE LIST */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {spaces.map((space) => (
          <SpaceCardPanel
            key={space._id}
            spaceName={space.name}
            spaceImg="/space1.jpg" // เปลี่ยนเป็น dynamic ได้ทีหลัง
            spaceLocate={space.address}
            spaceOPCL={`${space.openTime} - ${space.closeTime}`}
            spaceTel={space.tel}
            onBook={() => {
              console.log("SELECT:", space._id)
              setSelectedSpace(space)
            }}
          />
        ))}

      </div>

      {/* MODAL */}
      {selectedSpace && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-2xl">

            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Reserve a Room
            </h2>

            <p className="text-gray-500 mb-6">
              Space:{" "}
              <span className="font-semibold text-gray-700">
                {selectedSpace.name}
              </span>
            </p>

            <label className="block text-gray-600 mb-2">
              Select Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-14 border rounded-lg px-4 mb-6"
            />

            <div className="flex justify-end gap-3">

              {/* CANCEL */}
              <button
                onClick={() => {
                  setSelectedSpace(null)
                  setDate("")
                }}
                className="px-5 py-2 border rounded-lg text-gray-500"
              >
                Cancel
              </button>

              {/* CONFIRM */}
              <button
                onClick={async () => {
                  if (!date) {
                    alert("Please select date")
                    return
                  }

                  if (!user?.token) {
                    alert("Please login first")
                    return
                  }

                  try {
                    console.log("SEND:", {
                      spaceId: selectedSpace._id,
                      date
                    })

                    await createReservation(
                      selectedSpace._id,   // 🔥 ถูกต้อง 100%
                      {
                        reservationDate: new Date(date + "T00:00:00").toISOString(),
                      },
                      user.token
                    )

                    alert("Reservation success ✅")

                    setSelectedSpace(null)
                    setDate("")

                  } catch (err: any) {
                    console.log("ERROR:", err)
                    alert(err.message || "Reservation failed")
                  }
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Confirm
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
  )
}