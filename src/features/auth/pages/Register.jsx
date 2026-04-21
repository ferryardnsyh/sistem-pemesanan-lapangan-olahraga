import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [telp, setTelp] = useState("")
  const [password, setPassword] = useState("")
  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nama_user: nama,
          email: email,
          no_telp: telp,
          password: password,
          role: "user"
        })
      });

      const data = await res.text();
      alert(data);

      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Register gagal");
    }
  };

  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center">

      {/* CARD */}
      <div className="bg-white w-[400px] p-8 rounded-xl shadow-lg">

        <h2 className="text-xl font-bold mb-6 text-center">Registrasi</h2>

        <input
          type="text"
          placeholder="Nama Lengkap"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <input
          type="text"
          placeholder="Phone"
          value={telp}
          onChange={(e) => setTelp(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-md bg-yellow-100 outline-none"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
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