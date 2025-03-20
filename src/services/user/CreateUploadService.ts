

interface UserRequest{
    image: string;

}



class CreateUploadService{
    async execute({ image }: UserRequest){

      
      

        if(!image){
            throw new Error("Iamge incorrect!")
        }

        

        return image;

    }
}

export {CreateUploadService}