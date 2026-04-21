import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // 🔹 CEK USER SUDAH LOGIN
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      navigate("/dashboard")
    }
  }, [navigate])

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      const data = await res.json()

      if (!res.ok) {
        return alert(data.message)
      }

      localStorage.setItem("user", JSON.stringify(data.user))
      navigate("/dashboard")

    } catch (err) {
      alert("Server error")
    }
  }

  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center relative">

      {/* BUTTON KEMBALI */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 transition text-sm"
      >
        ← Kembali
      </button>

      <div className="bg-white w-[400px] p-8 rounded-xl shadow-lg">

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

        <p className="text-xs text-gray-600 mb-5 text-right">
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer"
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