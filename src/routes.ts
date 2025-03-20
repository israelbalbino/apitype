import { Router} from "express";
import multer from "multer";

import {CreateUploadController} from './controllers/user/CreateUploadController';


const router = Router();
const upload = multer({ storage: multer.memoryStorage() });
//router.get('/teste', (req: Request, res: Response)=>{

 //   throw new Error("TESTE AQUI")
//    return res.json({ ok :true })

//})

//--ROTA USER
router.post('/upload',upload.single("image"), new CreateUploadController().handle)







export { router };