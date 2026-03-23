import Image from "next/image"
import { MapPin,Clock } from "lucide-react"

export default function SpaceCard ({spaceName, spaceImg, spaceLocate, spaceOPCL} : {spaceName:string, spaceImg:string, spaceLocate:string, spaceOPCL:string}) {
    return (
        <div className="w-100 h-100 bg-white rounded-lg shadow-lg relative">
            <div className="relative w-full h-[70%]">
                <Image className="rounded" src={spaceImg} alt='card image'  width={400} height={200} style={{ objectFit: "cover" , display: "block" }} />

            </div>
            <div className="flex flex-col gap-2">
                    <h1 className='text-2xl font-bold'>{spaceName}</h1>
                    <div className="flex flex-row gap-2">
                        <MapPin />
                        <p>{spaceLocate}</p>

                    </div>
                    <div className="flex flex-row gap-2">
                         <Clock/>
                         <p>{spaceOPCL}</p>

                    </div>
            </div>
            <button>Reserve</button>


        </div>
    )
}