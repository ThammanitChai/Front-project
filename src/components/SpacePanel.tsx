import Image from "next/image"
import { MapPin,Clock,PhoneCall } from "lucide-react"

export default function SpaceCardPanel ({spaceName, spaceImg, spaceLocate, spaceOPCL, spaceTel} : {spaceName:string, spaceImg:string, spaceLocate:string, spaceOPCL:string, spaceTel:string}) {
    return (
  <div className="w-150 h-150 bg-white rounded-lg shadow-lg relative mt-5">
    <div className="relative w-full h-[70%]">
      <Image
        className="rounded"
        src={spaceImg}
        alt="card image"
        width={600}
        height={500}
        style={{ objectFit: "cover", display: "block" }}
      />
    </div>

    <div className="p-5">
      <h2 className="text-4xl font-bold text-gray-900">
        {spaceName}
      </h2>

      <div className="mt-3 space-y-2 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-lg">{spaceLocate}</span>
        </div>

        <div className="flex items-center gap-2">
          <PhoneCall className="w-4 h-4 text-gray-500" />
          <span className="text-lg">{spaceTel}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-lg">{spaceOPCL}</span>
        </div>
      </div>

      <button className="mt-4 w-full h-10 py-3 bg-blue-900 text-white rounded font-bold">
        Book Space
      </button>
    </div>
  </div>
)
}