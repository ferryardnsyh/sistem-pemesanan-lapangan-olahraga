import React from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-blue-900 text-white px-10 py-4 flex justify-between items-center">
        <h1 className="font-semibold text-lg">Sewa Lapangan</h1>

        <div className="flex items-center gap-6">
          <span>Halo, {user?.nama || "User"} 👋</span>

          <button onClick={() => navigate("/history")}>History</button>
          <button onClick={() => navigate("/profile")}>Profile</button>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded-md"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="p-8">

        <h2 className="text-2xl font-bold mb-2">
          Dashboard
        </h2>

        <p className="text-gray-600 mb-6">
          Selamat datang, {user?.nama}. Silakan booking lapangan favoritmu 🚀
        </p>

        {/* CARD LIST */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">Futsal</h3>
            <p className="text-sm text-gray-500">Indoor</p>
            <button className="mt-3 bg-blue-900 text-white px-3 py-1 rounded">
              Booking
            </button>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">Basket</h3>
            <p className="text-sm text-gray-500">Outdoor</p>
            <button className="mt-3 bg-blue-900 text-white px-3 py-1 rounded">
              Booking
            </button>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">Badminton</h3>
            <p className="text-sm text-gray-500">Indoor</p>
            <button className="mt-3 bg-blue-900 text-white px-3 py-1 rounded">
              Booking
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard