import express from 'express';
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRouter.js';
import cors from 'cors';
import documentRouter from './routes/documentRouter.js';

configDotenv();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Pinging ");
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/documents', documentRouter);

app.listen(PORT, () => {
  console.log(`Server is running beautifully on port ${PORT} ✨`);
});