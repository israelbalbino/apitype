

import prismaClient from "../../prisma";


interface ListRequest{
    token:string;
    status:string;
}


class ListNotifyService{
    
  async execute({token, status}: ListRequest){

    const eventoSlavo = await prismaClient.notify.findFirst({
        where:{

            token:token,
            status:status
      

        }
    })

    
    return eventoSlavo;

  }

 
}

export { ListNotifyService }


