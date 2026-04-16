import { Request, Response, Router } from "express";
import { accountController } from "../controllers/account.controller";

export const accountRouter = Router();

accountRouter.get('/settings', async (req: Request, res: Response)=>{
    try{
        const settings = await accountController.getSettings(
            (req.query.idInstance as string),
            (req.query.apiTokenInstance as string),
        )
        res.json(settings.data)
    } catch(error){
        res.send(error)
    }
})

accountRouter.get('/instanceState', async (req: Request, res: Response)=>{
    try{
        const state = await accountController.getInstanceState(
            (req.query.idInstance as string),
            (req.query.apiTokenInstance as string),
        )
        res.json(state.data)
    } catch(error){
        res.send(error)
    }
})