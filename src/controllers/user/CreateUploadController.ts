import { Request, Response } from "express";
import { CreateUploadService } from '../../services/user/CreateUploadService';
import { v2 as cloudinary } from 'cloudinary';
import { nanoid } from 'nanoid';


class CreateUploadController{
    async handle(request: Request, response: Response){
        const {image} = request.body;
        const ids = nanoid();

     

        const createUserService = new CreateUploadService();

        const upload = await createUserService.execute({
            image
        });

         //const base64str = `data:image/png;base64,${img}`;
    cloudinary.config({ 
        cloud_name: 'da46ytkha', 
        api_key: '977157797782912', 
        api_secret: 'PUrUIjl3IAp5ghsXqEznBWn7WVY' // Click 'View API Keys' above to copy your API secret
    });

       
    if(image === 'null'){
        response.json({sucess:"false"})
    }else{
        try {
            // Upload an image
            const uploadResult = await cloudinary.uploader
              .upload(
                  `${image}`, {
                      public_id:ids,
                  }
              ).then((res)=>{
       
               const data = {
                   url:res.url
                 
               }
               return response.json(data);
              })
            
       
           
        
           
           
           // Optimize delivery by resizing and applying auto-format and auto-quality
           const optimizeUrl = cloudinary.url(`${ids}`, {
               fetch_format: 'auto',
               quality: 'auto'
           });
           
         
           
           // Transform the image: auto-crop to square aspect_ratio
           const autoCropUrl = cloudinary.url(`${ids}`, {
               crop: 'auto',
               gravity: 'auto',
               width: 500,
               height: 500,
           });
           
            
          } catch (error) {
           return response.json('error ao enviar arquivo!');
          }
         
              
           }
    }
    


    
}

export { CreateUploadController }