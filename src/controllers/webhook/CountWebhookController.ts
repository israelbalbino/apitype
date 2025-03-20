import { Request, Response } from "express";
import { CountWebhookService } from "../../services/webhook/CountWebhookService";


class CountWebhookController{
    async handle(request: Request, response: Response){
        const user_id = request.user_id;

        const countWebhook = new CountWebhookService();

        const count = await countWebhook.execute({
            user_id
        })

        return response.json(count);
    }
}

export { CountWebhookController }