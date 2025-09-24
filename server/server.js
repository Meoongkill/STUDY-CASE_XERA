require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Laundry Management API.' });
});
require('./routes/auth.routes')(app);


// VVV PINDAHKAN BLOK SYNC KE SINI VVV
// Sinkronisasi database
db.sequelize.sync({ force: false }) // Ganti kembali ke force: false
  .then(() => {
    console.log("Database tersinkronisasi.");
    // Jalankan server HANYA SETELAH database siap
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server berjalan di port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("Gagal sinkronisasi database: " + err.message);
  });
// ^^^ BATAS AKHIR BLOK SYNC ^^^

// HAPUS BLOK app.listen DAN BLOK SYNC DARI BAGIAN BAWAH FILE