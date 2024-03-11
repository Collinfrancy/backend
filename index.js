import express from 'express';
import cors from 'cors';
import mongoose from './db/dbConnection.js';
import routes from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config(); //everything in .env file can be acessed throughout the program

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('uploads'));
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
  console.log(process.env.SECRET_KEY);

  console.log('App is running @ http://localhost:4444');
});

// git

// git add .
// git commit -m "INDEX CHANGED"
// git push origin dev
// git checkout main
// git pull origin main
// ..
