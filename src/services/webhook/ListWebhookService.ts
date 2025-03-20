import prismaClient from "../../prisma";

interface webhooksRequest{
    user_id: string
    status: boolean | string;
}

class ListWebhookService{
    async execute( { user_id, status}: webhooksRequest){
     
        const webhooks = await prismaClient.webhook.findMany({
            where:{
                user_id:user_id,
                status: status == 'true' ? true : false
            }
        })

        return webhooks;
    }
}

export { ListWebhookService }