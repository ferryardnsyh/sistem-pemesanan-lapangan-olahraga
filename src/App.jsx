import { Routes, Route } from "react-router-dom"
import Home from "./features/pelanggan/pages/Home"
import Booking from "./features/pelanggan/pages/Booking"
import Booking2 from "./features/pelanggan/pages/Booking2"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking2" element={<Booking2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App