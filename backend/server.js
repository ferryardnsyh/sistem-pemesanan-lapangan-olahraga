const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

// koneksi database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_pemesanan_lap"
});

db.connect((err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("DB Connected!");
  }
});

// ================= TEST =================
app.get("/", (req, res) => {
  res.send("Backend jalan!");
});

// ================= REGISTER =================
app.post("/register", async (req, res) => {
  console.log("🔥 KENA HIT REGISTER");
  console.log("DATA:", req.body);

  const { nama_user, email, no_telp, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO user (nama_user, email, no_telp, password, role) VALUES (?, ?, ?, ?, ?)",
    [nama_user, email, no_telp, hashedPassword, role || "user"],
    (err, result) => {
      if (err) {
        console.log("ERROR DB:", err);
        return res.status(500).send(err.message);
      }
      res.send("Register berhasil!");
    }
  );
});

// ================= RUN =================
app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});

