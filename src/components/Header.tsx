'use client'
import { CalendarDays, LogOut, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header () {
  const router = useRouter()

  const gotoLanding = () => {
    router.push("/")
  }

  const gotoLogin = () => {
    router.push("/login")
  }

  const gotoRegister = () => {
    router.push("/register")
  }



  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={gotoLanding} className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <CalendarDays className="h-6 w-6 text-primary" />
          <span>SpaceFlow</span>
        </button>

        <nav className="flex items-center gap-2">
          <button onClick={gotoLogin} className="w-50 h-15 bg-white font-bold rounded">sign in</button>
          <button onClick={gotoRegister} className="w-50 h-15 bg-blue-900 font-bold rounded text-white">Get Started</button>
        </nav>
      </div>
    </header>
  );
};
