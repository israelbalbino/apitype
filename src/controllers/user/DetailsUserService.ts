import { request, Request, Response } from "express";
import { UserDatailService } from "../../services/user/DetailsUserService";


class DetailsUserController{
    async handle(request: Request, response: Response){
         
        const user_id = request.user_id;

        console.log(user_id);
        const userDetailService = new UserDatailService();

        const detailUser = await userDetailService.execute(user_id)
    
        return response.json(detailUser);
    
    }
}

export {DetailsUserController}