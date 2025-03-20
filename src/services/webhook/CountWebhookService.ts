import prismaClient from "../../prisma";

interface CountRequest{
    user_id: string;
}

class CountWebhookService{
    async execute({user_id}){

        const count = await prismaClient.webhook.count({
            where:{
                user_id: user_id
            }
        })

        return count;

    }
}

export { CountWebhookService }