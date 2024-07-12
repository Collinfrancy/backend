import express from 'express';
import cors from 'cors';
import mongoose from './db/dbConnection.js';
import routes from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('uploads'));
app.use(routes);

app.listen(4000, () => {
  console.log('app is running at 4000 ');
});
