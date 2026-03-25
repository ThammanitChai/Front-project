"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { MapPin, Clock } from "lucide-react"

export default function SpaceCard({
  _id,
  spaceName,
  spaceImg,
  spaceLocate,
  spaceOPCL
}: {
  _id: string
  spaceName: string
  spaceImg: string
  spaceLocate: string
  spaceOPCL: string
}) {
  const router = useRouter()

  const handleReserve = () => {
    console.log("Go reserve:", _id)

    // 👉 ไปหน้า reservation พร้อม id
    router.push(`/reservation/${_id}`)
  }

  return (
    <div className="w-100 h-100 bg-white rounded-lg shadow-lg p-3">
      <div className="relative w-full h-[70%]">
        <Image
          className="rounded"
          src={spaceImg}
          alt="card image"
          width={400}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <h1 className="text-xl font-bold">{spaceName}</h1>

        <div className="flex flex-row gap-2 items-center">
          <MapPin />
          <p>{spaceLocate}</p>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <Clock />
          <p>{spaceOPCL}</p>
        </div>
      </div>

      <button
        onClick={handleReserve}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded"
      >
        Book Space
      </button>
    </div>
  )
}