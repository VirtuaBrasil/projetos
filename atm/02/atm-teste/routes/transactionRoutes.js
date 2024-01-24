const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// POST request para realizar um saque
router.post('/withdraw', transactionController.calculateNotes);

module.exports = router;
