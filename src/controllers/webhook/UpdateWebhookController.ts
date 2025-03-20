import { Request, Response } from "express";
import { UpdateWebhookService } from "../../services/webhook/UpdateWebhookService";

class UpdateWebhookController{
    async handle(request: Request, response: Response){
        const {  name, token, status, webhook_id } = request.body;
        const user_id = request.user_id;
   

        const updateWebhook = new UpdateWebhookService();

        const user = await updateWebhook.execute({
           user_id,
           name,
           token,
           status,
           webhook_id
        })

        return response.json(user);
    }
}

export { UpdateWebhookController }