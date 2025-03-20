import prismaClient from "../../prisma";


interface DetailsRequest{
    webhook_id:string;
}


class DetailsWebhookService{
    async execute({ webhook_id }:DetailsRequest){
      
        const details = await prismaClient.webhook.findFirst({
            where:{
                id: webhook_id

            }
        })

        return details;

    }
}

export { DetailsWebhookService }