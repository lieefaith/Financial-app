// Import express, middleware, dan controller
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getFinances,
  createFinance,
  updateFinance,
  deleteFinance,
  getFinanceReport,
} = require('../controllers/financeController');

// Route untuk mendapatkan semua data finance
router.get('/', protect, getFinances);

// Route untuk membuat data finance baru
router.post('/', protect, createFinance);

// Route untuk mengupdate data finance
router.put('/:id', protect, updateFinance);

// Route untuk menghapus data finance
router.delete('/:id', protect, deleteFinance);

// Route untuk mendapatkan laporan finance
router.get('/report', protect, getFinanceReport);

module.exports = router;