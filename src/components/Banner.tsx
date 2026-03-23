'use client'
import heroBg from "/bg.jpg"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Banner () {
  const router = useRouter()

  const gotoSpaces = () => {
    router.push("/spaces")
  }

  const gotoLogin = () => {
    router.push("/login")
  }

    return (
    <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/bg.jpg" alt='cover' 
                fill={true} 
                style={{ objectFit: 'cover' }} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container mx-auto relative z-10 py-28 text-center md:py-36">
          <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl">
            Find Your Perfect<br />
            <span className="opacity-80">Workspace</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-200">
            Book co-working spaces in seconds. Flexible, affordable, and designed for productivity.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <button onClick={gotoLogin} className="w-50 h-12 bg-blue-900 text-white font-bold rounded flex items-center justify-center gap-2">Reserve Now <ArrowRight className="ml-2 h-4 w-4" /></button>
            <button onClick={gotoSpaces} className="w-50 h-12 bg-gray-500 text-white font-bold rounded">Browse Spaces</button>
            
          </div>
        </div>
    </section>

    )
}