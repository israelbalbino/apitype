

interface UserRequest{
    image: string;

}



class CreateUploadService{
    async execute({ image }: UserRequest){

      
      


        

        return image;

    }
}

export {CreateUploadService}