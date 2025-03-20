import prismaClient from "../../prisma";



class UserDatailService{
    async execute(user_id: string){
        
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id:true,
                name:true,
                email:true,
                subscriptions:{
                    select:{
                        id:true,
                        priceId:true,
                        status:true
                    }
                }
            }
        })
        return user;
    }

}

export {UserDatailService}