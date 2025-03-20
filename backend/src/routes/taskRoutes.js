const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Controllers
const {
    createTask,
    getTask,
    updateTask,
    deleteTask } = require("../controllers/taskController");

router.post('/tasks', authMiddleware, createTask);
router.get('/tasks', authMiddleware, getTask);
router.put('/tasks/:id', authMiddleware, updateTask);
router.delete('/tasks/:id', authMiddleware, deleteTask);

module.exports = router;
