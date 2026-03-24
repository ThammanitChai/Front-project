"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { login } from "@/lib/api";

export default function LoginPage() {   // ✅ ต้องมี default
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await login(email, password);

      localStorage.setItem("token", res.token);
      setUser({ token: res.token });

      router.push("/");
    } catch (err: any) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}