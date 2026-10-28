"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://back.back2eras.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Simpan token di LocalStorage
        localStorage.setItem("admin_token", data.token);
        localStorage.setItem("admin_user", JSON.stringify(data.user));
        
        Swal.fire({ title: "Welcome Back!", text: "Login successful.", icon: "success", background: "#144333", color: "#eaddce", confirmButtonColor: "#0fdff8", timer: 1500 });
        router.push("/admin/visitors"); // Arahkan ke dashboard
      } else {
        Swal.fire("Login Failed", data.message || "Invalid credentials", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Server connection failed.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const { value: emailInput } = await Swal.fire({
      title: "Forgot Password?",
      text: "Enter your admin email to receive a new password.",
      input: "email",
      inputPlaceholder: "admin@back2eras.com",
      background: "#144333",
      color: "#eaddce",
      confirmButtonColor: "#ff1493",
      showCancelButton: true
    });

    if (emailInput) {
      Swal.fire({ title: 'Sending...', background: "#144333", color: "#0fdff8", allowOutsideClick: false, didOpen: () => { Swal.showLoading() } });
      try {
        const res = await fetch("https://back.back2eras.com/api/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({ email: emailInput }),
        });
        const data = await res.json();
        if (res.ok) {
          Swal.fire("Success!", data.message, "success");
        } else {
          Swal.fire("Failed!", data.message, "error");
        }
      } catch (e) {
        Swal.fire("Error", "Server error.", "error");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#000] flex items-center justify-center p-4">
      <div className="bg-[#144333] border-4 border-[#0fdff8] p-8 rounded-xl shadow-[10px_10px_0px_#ff1493] max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="font-anton text-4xl text-[#0fdff8] uppercase tracking-widest">Admin Portal</h1>
          <p className="text-[#eaddce] mt-2">Sign in to manage BACK2ERAS</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="font-anton text-[#fadf29] uppercase tracking-wide">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:border-[#ff1493] focus:outline-none rounded" placeholder="admin@back2eras.com" />
          </div>
          <div>
            <label className="font-anton text-[#fadf29] uppercase tracking-wide">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-1 bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:border-[#ff1493] focus:outline-none rounded" placeholder="••••••••" />
          </div>
          
          <button type="submit" disabled={isLoading} className="mt-4 w-full bg-[#ff1493] text-white font-anton text-xl uppercase py-3 rounded shadow-[4px_4px_0px_#fadf29] hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50">
            {isLoading ? "Authenticating..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button onClick={handleForgotPassword} className="text-[#0fdff8] text-sm hover:underline">Forgot Password?</button>
        </div>
      </div>
    </div>
  );
}