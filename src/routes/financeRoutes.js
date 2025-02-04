const express = require('express');
const router = express.Router();
const { protect} = require('../middleware/authMiddleware');
const { 
  getFinances, 
  createFinance, 
  updateFinance, 
  deleteFinance, 
  getFinanceReport, 
  filterFinances,
  getCategoryStats,
  getMonthlyStats,
} = require('../controllers/financeController');

router.get('/', protect, getFinances);
router.post('/', protect, createFinance);
router.put('/:id', protect, updateFinance);
router.delete('/:id', protect, deleteFinance);
router.get('/report', protect, getFinanceReport);
router.get('/filter', protect, filterFinances);
router.get('/category-stats', protect, getCategoryStats);
router.get('/monthly-stats', protect, getMonthlyStats);

module.exports = router;
