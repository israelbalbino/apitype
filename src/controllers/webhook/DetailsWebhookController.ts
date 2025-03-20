import { Request, Response } from "express";
import { DetailsWebhookService } from "../../services/webhook/DetailsWebhookService";

class DetailsWebhookController{
    async handle(request:Request, response: Response){
      
    
        const webhook_id = request.query.webhook_id as string;

        const detailsWebhooks = new DetailsWebhookService();

        const webhooks = await detailsWebhooks.execute({
            webhook_id
        })

        return response.json(webhooks);
    }
}
DetailsWebhookController
export { DetailsWebhookController }