import express ,{ErrorRequestHandler, Request, Response} from "express";
import path from "path";
import dotevn from "dotenv";
import parkingRoute from './routes/parking'

const bodyParser = require('body-parser');

const cors = require('cors');

//banco de dados
import { mongoConnect } from "./database/mongo";


dotevn.config();

mongoConnect();

const server = express();
server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname,'../public')));
server.use(express.urlencoded({extended: true}));


server.use(parkingRoute);

server.use((req: Request, res: Response) =>{
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) =>{
    if(err.status){
        res.status(err.status);
    }else{
        res.status(400);
    }
    if(err.message){
        res.json({error: err.message});
    }else{
        res.json({error: 'Ocorreu algum erro.'});
    }
}


server.listen(process.env.PORT);