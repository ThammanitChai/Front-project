import { Button, TextField } from "@mui/material"
import { Select, MenuItem } from "@mui/material"
import Link from "next/link"

export default function Login () {
    return (
        <main  className="w-full flex flex-col items-center justify-center mt-5">
             <div className="text-5xl font-bold text-black">SpaceFlow</div>
             <div className="mt-3">Book your perfect co-working spot</div>
            <form className="flex flex-col items-center gap-6 mt-8">
                <div className="text-2xl font-bold">Log in</div>
                <div>Enter your credentials to continue</div>
                <TextField className="w-[20vw]" variant="standard" label="Email" name="Email"  />
                <TextField className="w-[20vw]" variant="standard" label="Password" name="Password" />
                <Link href="/register" className="text-blue-700">Don't have an account yet?</Link>
                <button className="bg-sky-700 font-extrabold text-white w-[20vw] h-12.5 rounded-lg hover:bg-gray-300 hover:text-sky-700" name="Book Venue">Log in</button>

            </form>
        </main>
    )
}