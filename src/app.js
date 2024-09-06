import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes   from './routes/auth.routes.js'
import eventsRoutes from './routes/events.routes.js'
import categoriesRoutes from './routes/category.route.js'

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", eventsRoutes);
app.use("/api", categoriesRoutes);

export default app;