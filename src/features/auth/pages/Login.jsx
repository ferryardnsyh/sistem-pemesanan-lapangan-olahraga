import React from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center">

      {/* CARD */}
      <div className="bg-white w-[400px] p-8 rounded-xl shadow-lg">

        <h2 className="text-xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <p className="text-xs text-gray-600 mb-5 text-right cursor-pointer">
          Lupa Password?
        </p>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition">
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