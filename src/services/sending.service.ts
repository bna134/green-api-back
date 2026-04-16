import axios from 'axios';
import * as dotenv from 'dotenv';
import { IFile, IMessage } from '../interfaces';

dotenv.config();

class SendingService {
    async sendMessage(idInstance: string, apiTokenInstance: string, messageData: IMessage){
        try{
            return await axios.post(
                `${process.env.API_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
                {   message: messageData.message,
                    chatId: messageData.chatId
                })
        } catch(error){
            throw error;
        }
    }
    async sendFileByUrl(idInstance: string, apiTokenInstance: string, fileData: IFile){
        try{
            return await axios.post(
                `${process.env.API_URL}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
                    chatId: fileData.chatId,
                    filename: fileData.filename,
                    fileUrl: fileData.fileUrl    
                })
        } catch(error){
            throw error;
        }
    }
}

export const sendingService = new SendingService()