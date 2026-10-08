const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const validateUser = require('../utils/validation/userSchema'); // Jika Joi sudah diimplementasikan
const methodNotAllowed = require('../middlewares/methodNotAllowed');

// Routes untuk /api/v1/users
router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser)
    .all(methodNotAllowed); // Mengembalikan 405 beserta header Allow jika method salah

router.route('/:id')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser)
    .all(methodNotAllowed); // Mengembalikan 405 beserta header Allow jika method salah

// DILARANG ADA IF ATAU .FILTER() DI SINI SESUAI ATURAN DOSEN

module.exports = router;