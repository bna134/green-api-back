import { IFile, IMessage } from "../interfaces";
import { sendingService } from "../services/sending.service";

class SendingController {
    async sendMessage(idInstance: string, apiTokenInstance: string, messageData: IMessage){
        try{
            return await sendingService.sendMessage(idInstance, apiTokenInstance, messageData);
        } catch(error){
            throw error
        }
    }
    async sendFile(idInstance: string, apiTokenInstance: string, fileData: IFile){
        try{
            return await sendingService.sendFileByUrl(idInstance, apiTokenInstance, fileData);
        } catch(error){
            throw error
        }
    }
}

export const sendingController = new SendingController();