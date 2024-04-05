// server.js

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

// Kết nối với MongoDB
mongoose.connect('mongodb+srv://xuanhuyqb202:fsMtxKieWDww7imY@cluster0.bykqzj2.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Sử dụng routes cho đăng nhập và đăng ký
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
