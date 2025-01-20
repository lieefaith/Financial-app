// Import mongoose untuk bekerja dengan MongoDB
const mongoose = require('mongoose');

// Fungsi untuk koneksi ke MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Terkoneksi: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Keluar dari aplikasi jika gagal
  }
};

module.exports = connectDB