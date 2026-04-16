import { Router } from "express";
import { accountRouter } from "./accounts.router";
import { sendingRouter } from "./sending.router";

export const routes = Router();
routes.use('/account', accountRouter);
routes.use('/sending', sendingRouter);