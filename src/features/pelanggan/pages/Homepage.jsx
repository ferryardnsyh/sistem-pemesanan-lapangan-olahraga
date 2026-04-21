import React from "react"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  const data = [
    {
      id: 1,
      nama: "Lapangan Futsal A",
      harga: "Rp.300.000",
      img: "https://i.pinimg.com/736x/13/c3/42/13c3423cd3d2e12a6087d33e14093615.jpg"
    },
    {
      id: 2,
      nama: "Lapangan Basket B",
      harga: "Rp.300.000",
      img: "https://i.pinimg.com/1200x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg"
    },
    {
      id: 3,
      nama: "Lapangan Badminton C",
      harga: "Rp.300.000",
      img: "https://i.pinimg.com/736x/0c/c0/f6/0cc0f6c8f3a0faa36ed7f941c70f9241.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 NAVBAR */}
      <nav className="bg-blue-900 text-white px-10 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-semibold">Sewa Lapangan</h1>

        <div className="flex items-center gap-6">
          <a className="hover:text-gray-300 cursor-pointer">Home</a>
          <a
            onClick={() => navigate("/login")}
            className="hover:text-gray-300 cursor-pointer">
            Masuk
          </a>
          <button
            onClick={() => navigate("/register")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1.5 rounded-lg font-semibold">
            Daftar
          </button>
        </div>
      </nav>

      {/* 🔹 HERO */}
      <div className="bg-gray-200 py-12 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          BOOKING LAPANGAN ONLINE
        </h1>
      </div>

      {/* 🔹 SEARCH (DROPDOWN) */}
      <div className="bg-blue-300 py-6 flex flex-wrap justify-center gap-3 px-4">

        <input
          type="text"
          placeholder="Cari nama venue"
          className="px-4 py-2 rounded-full w-56 outline-none shadow-sm"
        />

        <select className="px-4 py-2 rounded-full w-40 outline-none shadow-sm">
          <option>Pilih Kota</option>
          <option>Jakarta</option>
          <option>Bandung</option>
          <option>Surabaya</option>
        </select>

        <select className="px-4 py-2 rounded-full w-52 outline-none shadow-sm">
          <option>Cabang Olahraga</option>
          <option>Futsal</option>
          <option>Basket</option>
          <option>Badminton</option>
        </select>

        <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full shadow">
          Cari Venue
        </button>
      </div>

      {/* 🔹 LIST LAPANGAN */}
      <div className="bg-blue-300 py-10 px-6 flex flex-wrap justify-center gap-6">

        {data.map((item) => (
          <div
            key={item.id}
            className="bg-yellow-100 rounded-xl w-64 shadow-md overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.nama}
              className="h-40 w-full object-cover"
            />

            <div className="p-3 text-left">
              <p className="text-xs text-gray-500">Lorem ipsum</p>

              <h3 className="font-semibold text-sm mt-1">
                {item.nama}
              </h3>

              <p className="text-xs text-gray-400">
                Lorem ipsum
              </p>

              <p className="text-right font-bold mt-2 text-sm">
                {item.harga}
              </p>

              {/* 🔥 BUTTON LIHAT DETAIL */}
              <button className="w-full mt-3 bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg text-sm">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Home