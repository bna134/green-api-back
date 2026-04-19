import { Request, Response, Router } from "express";
import { sendingController } from "../controllers/sending.controller";
import cors from  'cors';

export const sendingRouter = Router();

sendingRouter.use(cors({
  origin: 'https://bna134.github.io',
  methods: ['GET', 'POST']
}))

sendingRouter.post('/message', async (req: Request, res: Response)=>{
    try{
        const message = await sendingController.sendMessage(
            (req.query.idInstance as string),
            (req.query.apiTokenInstance as string),
            {   
                chatId: req.body.chatId,
                message: req.body.message
            }
        )
        res.json(message)
    } catch(error){
        res.send((error as Error).message)
    }
})

sendingRouter.post('/file', async (req: Request, res: Response)=>{
    try{
        const state = await sendingController.sendFile(
            (req.query.idInstance as string),
            (req.query.apiTokenInstance as string),
            req.body
        )
        res.json(state)
    } catch(error){
        res.send((error as Error).message)
    }
})