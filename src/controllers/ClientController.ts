import { Request, Response } from 'express';
const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

import * as ClientService  from '../services/ClientService';

export const newClient = async (req: Request,res: Response) =>{
    const { name, cpf, telefone, email, endereco, plate } = req.body;

    if(!name){
        res.json({error: "algo deu errado"});
    }
    let client = await ClientService.newClient(name, email, cpf, telefone, endereco, plate);


    res.json({client: client});
}

export const listClient =async (req: Request,res: Response) =>{
  let client =  await ClientService.listAllClient();
    res.json({clients: client});
} 

export const getClient = async (req: Request,res: Response) => {
    let { id } = req.params

    if(mongoose.Types.ObjectId.isValid(id)){
        const client = await ClientService.getClient(id);
        res.json({client: client})
    }else{
        console.log('error')
        res.json({error: 'id invalid'})
    }
}
export const editClient = async (req: Request, res: Response) =>{
    const { id } = req.params;
    const { name, cpf, telefone, email, endereco, plate } = req.body;
    if(!id){
        res.json({erro: "Id invalido"});
    }
  
    if(mongoose.Types.ObjectId.isValid(id)){
        let client = await ClientService.getClient(id)
        if(!client){
            res.json({error: 'Client não encontrado'})
        }else{
          let clientEdit = await ClientService.editClient(id, name, email, cpf, telefone, endereco, plate);
            res.json({success: "cliente Alterado com sucesso!",Cleinte: clientEdit});
        }
      
    }else{
        res.json({error: 'id invalid'})
    }
  
    
}