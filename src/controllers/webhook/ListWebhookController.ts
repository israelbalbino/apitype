import { Request, Response } from "express";
import { ListWebhookService } from "../../services/webhook/ListWebhookService";


class ListWebhookController{
    async handle(request:Request, response: Response){
      
        const user_id = request.user_id;
        const status = request.query.status as string;

        const listWebhooks = new ListWebhookService();

        const webhooks = await listWebhooks.execute({
            user_id,
            status
        })

        return response.json(webhooks);
    }
}

export { ListWebhookController }