import { Router } from "express";
import { accountRouter } from "./accounts.router";
import { sendingRouter } from "./sending.router";
import cors from  'cors';

export const routes = Router();
routes.use(cors({
  origin: 'https://bna134.github.io',
  methods: ['GET', 'POST']
}))
routes.use('/account', accountRouter);
routes.use('/sending', sendingRouter);
