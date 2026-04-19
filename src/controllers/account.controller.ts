import { accountService } from "../services/account.service"

class AccountController {
    async getSettings(idInstance: string, apiTokenInstance: string){
        try{
            return await accountService.getSettings(idInstance, apiTokenInstance);
        } catch(error){
            throw error
        }
    }
    async getInstanceState(idInstance: string, apiTokenInstance: string){
        try{
            return await accountService.getInstanceState(idInstance, apiTokenInstance);
        } catch(error){
            throw error
        }
    }
}

export const accountController = new AccountController();