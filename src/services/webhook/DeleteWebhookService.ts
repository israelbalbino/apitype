import prismaClient from "../../prisma";

interface ReceiveRequest {
  item_id: string;
  user_id: string;
}

class DeleteWebhookService{
  async execute({ item_id, user_id }: ReceiveRequest){

    const webhook = await prismaClient.webhook.findFirst({
      where:{
        id: item_id
      }
    })

    await prismaClient.webhook.delete({
      where:{
        id: item_id
      }
    })


    const findUser = await prismaClient.user.findFirst({
      where:{
        id: user_id,
      }
    })

    return { status: 'updated'}

   
  }
}

export { DeleteWebhookService }