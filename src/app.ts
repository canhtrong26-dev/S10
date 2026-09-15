import express from 'express';
import connectDB from './config/db';
import courseRoutes from './routes/courseRoutes';

const app = express();

// Kết nối MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', courseRoutes);

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});