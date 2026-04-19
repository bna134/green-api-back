import express, { Application } from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/router'
import cors from 'cors';

dotenv.config();

export const app: Application = express();
const port = process.env.PORT || 9000;

app.use(cors()); 
app.use(express.json()); 
app.use('/', routes);
app.set('trust proxy', 1); 

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}/`);
});