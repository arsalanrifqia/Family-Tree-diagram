const Task = require('../models/Person');

// Create Task
const createTask = async (req, res) => {
    try {
        const newTask = new Task({ ...req.body, user_id: req.user.userId });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get Task
const getTask = async (req, res) => {
    try {
        const tasks = await Task.find({ user_id: req.user.userId });
        console.log(req.user);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Task
const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        
        if (!task) return res.status(404).json({ message: 'Task tidak ditemukan' });

        // Cek apakah task ini milik pengguna yang sedang login
        if (task.user_id.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Tidak diizinkan mengedit task ini' });
        }

        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return res.status(404).json({ message: 'Task tidak ditemukan' });

        // Cek apakah task ini milik pengguna yang sedang login
        if (task.user_id.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Tidak diizinkan menghapus task ini' });
        }

        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createTask, getTask, updateTask, deleteTask };