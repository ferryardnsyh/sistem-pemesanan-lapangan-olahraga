import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nama: "",
    email: "",
    phone: "",
    password: ""
  })

  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async () => {
    const { nama, email, phone, password } = form

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
    const phoneRegex = /^[0-9]{10,13}$/ // fleksibel Indo

    // VALIDASI
    if (!nama || !email || !phone || !password) {
      return setError("Semua field wajib diisi")
    }

    if (!emailRegex.test(email)) {
      return setError("Format email tidak valid")
    }

    if (!phoneRegex.test(phone)) {
      return setError("No HP harus angka (10-13 digit)")
    }

    if (!passwordRegex.test(password)) {
      return setError(
        "Password min 8 karakter, harus ada huruf besar, kecil, angka, dan simbol"
      )
    }

    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nama_user: nama,
          email: email,
          no_telp: phone,
          password: password,
          role: "user"
        })
      })

      const data = await res.json()

      if (!res.ok) {
        return setError(data.message || "Terjadi kesalahan")
      }

      alert("Register berhasil!")
      navigate("/login")

    } catch (err) {
      console.log(err)
      setError("Server error")
    }
  }

  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center relative">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 text-sm"
      >
        ← Kembali
      </button>

      <div className="bg-white w-[400px] p-8 rounded-xl shadow-lg">

        <h2 className="text-xl font-bold mb-6 text-center">Registrasi</h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <input
          name="nama"
          placeholder="Nama Lengkap"
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 bg-yellow-100 rounded-md outline-none"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 bg-yellow-100 rounded-md outline-none"
        />

        <input
          name="phone"
          placeholder="No HP"
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 bg-yellow-100 rounded-md outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-2 px-4 py-2 bg-yellow-100 rounded-md outline-none"
        />

        <p className="text-xs text-gray-500 mb-4">
          Password harus mengandung huruf besar, kecil, angka & simbol
        </p>

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
        >
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