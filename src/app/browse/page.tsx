"use client"

import { useState } from "react"
import SpaceCardPanel from "@/components/SpacePanel"
import { useAuth } from "@/context/AuthContext"
import { createReservation } from "@/lib/api"

type Space = {
  id: string
  name: string
}

export default function BrowsePage() {
  const { user } = useAuth()

  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null)
  const [date, setDate] = useState("")

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

        <SpaceCardPanel 
          spaceName="GoodHub"
          spaceImg="/space1.jpg"
          spaceLocate="123 Innovation Drive"
          spaceOPCL="06:00 - 00:00"
          spaceTel="098-567-3214"
          onBook={() => setSelectedSpace({
            id: "67e2a4b9c8d1f123456789ab", // 🔥 ObjectId จริงจาก Mongo
            name: "GoodHub"
          })}
        />

        <SpaceCardPanel 
          spaceName="ThinkSpace"
          spaceImg="/space2.jpg"
          spaceLocate="456 Creative Blvd"
          spaceOPCL="24 HRS"
          spaceTel="087-656-4537"
          onBook={() => setSelectedSpace({
            id: "67e2a4b9c8d1f123456789ac",
            name: "ThinkSpace"
          })}
        />

        <SpaceCardPanel 
          spaceName="9 OClock Square"
          spaceImg="/space3.jpg"
          spaceLocate="789 Startup Lane"
          spaceOPCL="07:00 - 23:00"
          spaceTel="065-346-2123"
          onBook={() => setSelectedSpace({
            id: "67e2a4b9c8d1f123456789ad",
            name: "9 OClock Square"
          })}
        />

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

              <button
                onClick={() => {
                  setSelectedSpace(null)
                  setDate("")
                }}
                className="px-5 py-2 border rounded-lg text-gray-500"
              >
                Cancel
              </button>

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
                      spaceId: selectedSpace.id,
                      reservationDate: date
                    })

                    await createReservation(
                      selectedSpace.id, // 🔥 ตัวที่ 1
                      {
                        reservationDate: new Date(date).toISOString(),
                      },
                      user.token // 🔥 ตัวที่ 3
                    )

                    alert("Reservation success ✅")

                    setSelectedSpace(null)
                    setDate("")

                  } catch (err: any) {
                    console.log("RESERVE ERROR:", err)
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