"use client"

import { useRouter } from "next/navigation"
import { Wifi, Coffee, Users, MapPin, CalendarDays,  ArrowRight } from "lucide-react"

export default function Home() {
  const router = useRouter()

  return (
    <div className="w-full min-h-screen bg-white">


      {/* HERO */}
      <div
        className="relative w-full h-[600px] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-4">
          <h1 className="text-6xl font-bold mb-6">
            Find Your Perfect WorkSpace
          </h1>

          <p className="text-xl mb-8 max-w-3xl">
            Book co-working spaces in seconds. Flexible, affordable, and designed for productivity.
          </p>

          <div className="flex gap-6 justify-center">
            <button
              onClick={() => router.push("/reservation")}
              className="bg-blue-900 px-8 py-4 rounded-lg text-lg"
            >
              Reserve Now
            </button>

            <button
              onClick={() => router.push("/browse")}
              className="bg-gray-400 px-8 py-4 rounded-lg text-lg"
            >
              Browse Spaces
            </button>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-10">
        <div>
          <div className="w-16 h-16 bg-gray-300 mx-auto rounded-lg mb-4 flex items-center justify-center"><Wifi className="text-white w-9 h-9" /></div>
          <h3 className="text-xl font-bold">High-Speed WiFi</h3>
          <p className="text-gray-600">Blazing fast internet for all your needs</p>
        </div>

        <div>
          <div className="w-16 h-16 bg-gray-300 mx-auto rounded-lg mb-4 flex items-center justify-center"><Coffee className="text-white w-10 h-10" /></div>
          <h3 className="text-xl font-bold">Free Amenities</h3>
          <p className="text-gray-600">Coffee, snacks, and printing included</p>
        </div>

        <div>
          <div className="w-16 h-16 bg-gray-300 mx-auto rounded-lg mb-4 flex items-center justify-center"><Users className="text-white w-9 h-9" /></div>
          <h3 className="text-xl font-bold">Community</h3>
          <p className="text-gray-600">Network with like-minded professionals</p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">

          <div className="border border-gray-300 p-6 rounded-xl">
            <div className="text-4xl font-bold text-gray-300 mb-2">01</div>
            <div className="w-12 h-12 bg-gray-300 mx-auto rounded-full mb-4 flex justify-center items-center"><MapPin className="w-7 h-7" /></div>
            <h3 className="font-bold text-lg mb-2">Browse Spaces</h3>
            <p className="text-gray-500">
              Explore our curated list of co-working locations across the city.
            </p>
          </div>

          <div className="border border-gray-300 p-6 rounded-xl">
            <div className="text-4xl font-bold text-gray-300 mb-2">02</div>
            <div className="w-12 h-12 bg-gray-300 mx-auto rounded-full mb-4 flex justify-center items-center"><CalendarDays className="w-7 h-7" /></div>
            <h3 className="font-bold text-lg mb-2">Reserve a Spot</h3>
            <p className="text-gray-500">
              Pick your preferred date and time, then book instantly online.
            </p>
          </div>

          <div className="border border-gray-300 p-6 rounded-xl">
            <div className="text-4xl font-bold text-gray-300 mb-2">03</div>
            <div className="w-12 h-12 bg-gray-300 mx-auto rounded-full mb-4 flex justify-center items-center"><ArrowRight className="w-7 h-7" /></div>
            <h3 className="font-bold text-lg mb-2">Show Up & Work</h3>
            <p className="text-gray-500">
              Arrive at your reserved space and enjoy a productive day.
            </p>
          </div>

        </div>

        <button
          onClick={() => router.push("/register")}
          className="mt-10 bg-emerald-400 text-white px-8 py-3 rounded-lg"
        >
          Get Started
        </button>
      </div>

      {/* FOOTER */}
      <div className="bg-blue-900 text-white py-12 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-2">SpaceFlow</h2>
            <p className="text-gray-300">
              Modern co-working spaces designed for productivity and collaboration.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">Quick Links</h3>
            <p className="text-gray-300 cursor-pointer" onClick={() => router.push("/login")}>Log in</p>
            <p className="text-gray-300 cursor-pointer" onClick={() => router.push("/register")}>Register</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">Contact</h3>
            <p className="text-gray-300">hello@workspace.com</p>
            <p className="text-gray-300">(02) 123-4567</p>
            <p className="text-gray-300">Bangkok, Thailand</p>
          </div>

        </div>
      </div>

    </div>
  )
}