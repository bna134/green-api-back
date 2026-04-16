import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

class AccountService {
    async getSettings(idInstance: string, apiTokenInstance: string){
        try{
            return await axios.get(`${process.env.API_URL}/waInstance${idInstance}/getSettings/${apiTokenInstance}`)
        } catch(error){
            throw error;
        }
    }
    async getInstanceState(idInstance: string, apiTokenInstance: string){
        try{
            return await axios.get(`${process.env.API_URL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
        } catch(error){
            throw error;
        }
    }
}

export const accountService = new AccountService()