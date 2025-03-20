import prismaClient from "../../prisma";

interface WebhookRequest{
    user_id: string;
    webhook_id: string;
    name: string;
    token:string;
    status: boolean | string;
}

class UpdateWebhookService{
    async execute({ user_id, webhook_id, name, token, status = true }: WebhookRequest){
         

     const user = await prismaClient.user.findFirst({
        where:{
            id: user_id
        },
        include:{
            subscriptions:true,
        }
     })

     if(user?.subscriptions?.status !== 'active'){
        throw new Error("Not authorized")
     }

     const webhook = await prismaClient.webhook.update({
       where:{
        id: webhook_id,
       },
       data:{
        name: name,
        token: token,
        status: status === true ? true : false
       }
     })


            return webhook;
            
    }
}

export { UpdateWebhookService }