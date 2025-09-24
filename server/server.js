require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');

// Middleware
app.use(cors()); // Mengizinkan akses dari domain lain (frontend)
app.use(express.json()); // Mem-parse body request menjadi JSON

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database tersinkronisasi.");
});

app.get("/", (req, res) => {
  res.json({ message: "Selamat datang di API Laundry XERA." });
});

// DAFTARKAN ROUTES DI SINI
require('./routes/auth.routes')(app);
// Nanti kita akan tambahkan rute lain di bawahnya

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}.`);
});