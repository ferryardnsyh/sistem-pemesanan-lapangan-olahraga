import { Routes, Route } from "react-router-dom"
import Home from "./features/pelanggan/pages/Home"
import Booking from "./features/pelanggan/pages/Booking"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  )
}

export default App