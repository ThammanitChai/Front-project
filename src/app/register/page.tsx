import { Button, TextField } from "@mui/material"
import { Select, MenuItem } from "@mui/material"
import Link from "next/link"

export default function Register () {
    return (
        <main className="w-[100%] flex flex-col items-center justify-center mt-5 ">
            <div className="text-5xl font-bold text-black">SpaceFlow</div>
            <div className="mt-3">Book your perfect co-working spot</div>
            <form className="flex flex-col items-center gap-6 mt-8">
                <div className="text-2xl font-bold">Register</div>
                <div>Fill in your details to get started</div>
                <TextField className="w-[20vw]" variant="standard" label="Name" name="Name"  />
                <TextField className="w-[20vw]" variant="standard" label="Telephone" name="Telephone" />
                <TextField className="w-[20vw]" variant="standard" label="Email" name="Email" />
                <TextField className="w-[20vw]" variant="standard" label="Password" name="Password" />
                <div>Select your role</div>
                  <Select className="h-[3em] w-[20vw] bg-gray-100 rounded" variant="standard">
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="User">User</MenuItem>
                </Select>
            
                <button className="bg-sky-700 font-extrabold text-white w-[20vw] h-[50px] rounded-lg hover:bg-gray-300 hover:text-sky-700" name="Book Venue">Create Account</button>
                <div>Already have an account? <Link className="text-blue-700" href="/login">Log in</Link></div>

            </form>
        </main>
    )
}