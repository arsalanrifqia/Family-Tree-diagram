
// Packages
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Files
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Configuration
require('dotenv').config();
connectDB();


const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', authRoutes);
app.use('/users', usersRouter);

module.exports = app;
