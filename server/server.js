require('dotenv').config(); // Memuat variabel dari .env
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');

// Middleware
app.use(cors()); // Mengizinkan akses dari domain lain (frontend)
app.use(express.json()); // Mem-parse body request menjadi JSON

// Sinkronisasi Database
// `force: false` berarti tabel tidak akan dihapus setiap kali server restart
db.sequelize.sync({ force: false }).then(() => {
  console.log("Database tersinkronisasi.");
});

// Route sederhana untuk tes
app.get("/", (req, res) => {
  res.json({ message: "Selamat datang di API Laundry XERA." });
});

// Menjalankan Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}.`);
});