/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, FormEvent } from "react";
import Swal from "sweetalert2";

export default function MyProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Ambil data user yang sedang login dari LocalStorage saat halaman dimuat
  useEffect(() => {
    const userStr = localStorage.getItem("admin_user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validasi kecocokan password jika ingin diubah
    if (password && password !== passwordConfirm) {
      Swal.fire("Error!", "Passwords do not match.", "error");
      return;
    }

    setIsLoading(true);
    const token = localStorage.getItem("admin_token");

    try {
      const res = await fetch("https://backend-back2eras.vercel.app/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}` // Token wajin disisipkan untuk Autorisasi
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password || undefined // Jika kosong, tidak usah dikirim/diubah
        })
      });

      const data = await res.json();

      if (res.ok) {
        // Perbarui data LocalStorage dengan data terbaru dari database
        localStorage.setItem("admin_user", JSON.stringify(data.user));
        
        Swal.fire({
          title: "Profile Updated!",
          text: "Your admin account details have been updated successfully.",
          icon: "success",
          background: "#144333",
          color: "#eaddce",
          confirmButtonColor: "#0fdff8"
        }).then(() => {
          // Kosongkan kolom password setelah berhasil
          setPassword("");
          setPasswordConfirm("");
          
          // Refresh window agar nama di header atas langsung ikut berubah
          window.location.reload(); 
        });
      } else {
        Swal.fire("Update Failed", data.message || "Failed to update profile.", "error");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      Swal.fire("Connection Error", "Gagal terhubung ke server.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-[#eaddce]">
      
      <div className="mb-10">
        <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
          My Profile
        </h1>
        <p className="text-gray-400 mt-2">Manage your admin account credentials here.</p>
      </div>

      <div className="bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29] p-8 md:p-10 rounded-xl relative overflow-hidden">
        
        {/* Dekorasi Pojok */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff1493] blur-[80px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0fdff8] blur-[80px] opacity-20"></div>

        <form onSubmit={handleUpdateProfile} className="flex flex-col gap-6 relative z-10">
          
          {/* Kolom Nama */}
          <div className="flex flex-col gap-2">
            <label className="font-anton tracking-wide text-[#fadf29] uppercase text-lg">
              Display Name <span className="text-[#ff1493]">*</span>
            </label>
            <input 
              type="text" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name" 
              className="bg-[#144333]/50 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors rounded" 
            />
          </div>

          {/* Kolom Email */}
          <div className="flex flex-col gap-2">
            <label className="font-anton tracking-wide text-[#fadf29] uppercase text-lg">
              Email Address <span className="text-[#ff1493]">*</span>
            </label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@back2eras.com" 
              className="bg-[#144333]/50 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors rounded" 
            />
          </div>

          <hr className="border-[#13bbad]/30 my-4" />

          <div className="mb-2">
            <h3 className="font-anton text-2xl text-[#ff1493] uppercase tracking-widest">Change Password</h3>
            <p className="text-sm text-gray-400">Leave blank if you don't want to change your password.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kolom Password Baru */}
            <div className="flex flex-col gap-2">
              <label className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                New Password
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="bg-[#144333]/50 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded" 
              />
            </div>

            {/* Kolom Konfirmasi Password */}
            <div className="flex flex-col gap-2">
              <label className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                Confirm New Password
              </label>
              <input 
                type="password" 
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="••••••••" 
                className="bg-[#144333]/50 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded" 
              />
            </div>
          </div>

          {/* Tombol Simpan */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="mt-4 py-4 bg-[#0fdff8] text-black font-anton text-2xl tracking-widest uppercase rounded shadow-[6px_6px_0px_#ff1493] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50"
          >
            {isLoading ? "Saving Changes..." : "Save Profile"}
          </button>

        </form>
      </div>
    </div>
  );
}