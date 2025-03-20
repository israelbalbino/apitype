
import prismaClient from "../../prisma";


export async function CreateNotifyService(event:any) {
    
    try {



        const eventoSlavo = await prismaClient.notify.create({
            data:{

                token:event?.token,
                fullname:event?.customer.full_name,
                email:event?.customer.email,
                phone:event?.customer.phone_number,
                produto: event?.product.name,
                valor:String(event?.sale_amount),
                status:event?.sale_status_enum_key
          

            }
        })
        
    } catch (error) {

        console.log(error)
        
    }
}


