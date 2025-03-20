import { Request, Response } from "express";
import { ListNotifyService } from "../../services/perfectpay/ListNotifyService";

class ListNotifyController{
    async handle(request:Request, response: Response){
        const {token,status} = request.body;

        const list = new ListNotifyService();

        const listNotify = list.execute({
            token,
            status
        })

        return response.json(listNotify)

    }

}

export { ListNotifyController }