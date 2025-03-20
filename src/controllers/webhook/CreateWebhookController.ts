import { Request, Response } from "express";
import { CreateWebhookService } from "../../services/webhook/CreateWebhookService";


class CreateWebhookController{
    async handle(request: Request, response: Response){
     
    const {name, token} = request.body;
    const user_id = request.user_id;

    const createWebhook = new CreateWebhookService();

    const webhook = await createWebhook.execute({
        user_id,
        name,
        token
    })
    return response.json(webhook)


    }
}

export { CreateWebhookController }

