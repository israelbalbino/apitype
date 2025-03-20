import prismaClient from "../../prisma";

interface WebhookRequest{
    user_id: string;
    name: string;
    token: string;

}



class CreateWebhookService{

    async execute({user_id, name, token}: WebhookRequest){
    if(!name || !token){
        throw new Error("Error")
    }

    //verificar quantas webhook esse usuario ja tem cadastrado
    const myWebhooks = await prismaClient.webhook.count({
        where:{
            user_id
        }
    })

    const user = await prismaClient.user.findFirst({
        where:{
            id: user_id,
        },
        include:{
            subscriptions:true,
        }
    })

    //criando validação ou limite
    if(myWebhooks >= 3 && user?.subscriptions?.status !== 'active'){
      throw new Error("Not authorized")
    }

    const webhook = await prismaClient.webhook.create({
        data:{
            user_id: user_id,
            name: name, 
            token: token,
           
        }
    })

    return webhook;
    }

    

}

export { CreateWebhookService }