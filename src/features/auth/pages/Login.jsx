import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (!email || !password) {
      alert("Isi semua field!")
      return
    }

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
          navigate("/dashboard")
        }
    }, [])
  }

  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center">

      <div className="bg-white w-[400px] p-8 rounded-xl shadow-lg">
        {/* BUTTON KEMBALI */}
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 transition flex items-center gap-1 text-sm font-medium"
        >
          ← Kembali
        </button>
          <h2 className="text-xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <p className="text-xs text-gray-600 mb-5 text-right cursor-pointer">
          <span
            onClick={() => navigate("/")}
            className="text-gray-600 font-semibold cursor-pointer"
          >
            Lupa Password?
          </span>
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
        >
          Login
        </button>

        <p className="text-xs mt-4 text-center">
          Belum punya akun?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-700 font-semibold cursor-pointer"
          >
            Daftar
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login