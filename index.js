import express from 'express';
import cors from 'cors';
import mongoose from './db/dbConnection.js';
import routes from './routes/index.js';
import Department from './db/models/departmentSchema.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('uploads'));
app.use(routes);
//routes
app.listen(4444, () => {
  console.log('App is running @ http://localhost:4444');
});
