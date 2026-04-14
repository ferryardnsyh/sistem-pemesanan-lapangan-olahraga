import React from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center">

      {/* CARD */}
      <div className="bg-white w-[400px] p-8 rounded-xl shadow-lg">

        <h2 className="text-xl font-bold mb-6 text-center">Registrasi</h2>

        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-full mb-3 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <input
          type="text"
          placeholder="Phone"
          className="w-full mb-3 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition">
          Register
        </button>

        <p className="text-xs mt-4 text-center">
          Sudah punya akun?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-700 font-semibold cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>

    </div>
  )
}

export default Register