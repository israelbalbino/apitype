import express, {Request, Response, NextFunction} from "express";
import 'express-async-errors';
import cors from 'cors';
import {router} from  './routes';

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: Error, req: Request, res: Response, next:NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message:'internal server error'
    })

})

app.listen(port, () => console.log('SERVIDOR ONLINE'));