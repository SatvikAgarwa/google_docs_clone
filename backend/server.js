import express from 'express';
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRouter.js';

configDotenv();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running beautifully on port ${PORT} ✨`);
});