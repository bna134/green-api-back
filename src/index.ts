import express, { Application } from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/router';
import cors from  'cors';
import bodyParser from 'body-parser';

dotenv.config();

export const app: Application = express();
const port = process.env.PORT || 9000;

app.use(cors({
  origin: 'https://bna134.github.io',
  methods: ['GET', 'POST']
}))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json()); 
app.use('/', routes);
app.set('trust proxy', 1); 

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}/`);
});