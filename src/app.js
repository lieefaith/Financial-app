// Import library yang diperlukan
const express = require('express'); // Framework untuk membuat API
const dotenv = require('dotenv'); // Untuk membaca file .env
const connectDB = require('./config/db'); // Fungsi untuk koneksi ke database

// Konfigurasi dotenv agar membaca variabel lingkungan dari .env
dotenv.config();

// Inisialisasi Express
const app = express();

// Middleware untuk parsing JSON pada request body
app.use(express.json());

// Import rute API
const userRoutes = require('./routes/userRoutes');
const financeRoutes = require('./routes/financeRoutes');
const reminderRoutes = require('./routes/reminderRoutes'); 

// Gunakan rute API
app.use('/api/users', userRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/reminders', reminderRoutes); 

// Port aplikasi
const PORT = process.env.PORT || 5000;

// Jalankan server
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));



// Panggil koneksi ke databas
connectDB();