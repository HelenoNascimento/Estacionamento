import { connect } from 'mongoose';
import { config } from 'dotenv';

config();

export const mongoConnect = async() =>{
    try{
        console.log("conectando no MongoDB...");
        await connect(process.env.MONGO_URL as string,{});
        console.log("MongoDB conectado com sucesso!");
    }catch (erro){
        console.log("erro ao conectado no MongoDB", erro);
    }
}