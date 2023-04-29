
import Client from '../models/Client';
const { ObjectID } = require('mongodb');

export const newClient = async (name: string, email: string, cpf: number, telefone: string, endereco: string, plate: string ) =>{

    let newClient = new Client({
        name,
        email,
        cpf,
        telefone,
        endereco,
        plate
    }) 
    await newClient.save();
    return newClient
}

export const listAllClient = async() =>{
    return await Client.find();
}   

export const getClient = async (id: string) => {
    return await Client.findOne({ _id: id });
}
export const getClientEmail = async(email: string) =>{
    return await Client.findOne({email: email});
}

export const editClient = async(id: string, name: string, email: string, cpf: number, telefone: string, endereco: string, plate: string ) =>{

    let client = await Client.findOne({ _id: id });

    if (!client) {
      return
    }

    if (name) {
        client.name = name;
    }
    if (email) {
        client.email = email;
    }
    if (cpf) {
        client.cpf = cpf;
    }
    if (telefone) {
        client.telefone = telefone;
    }
    if (endereco) {
        client.endereco = endereco;
    }
    if (plate) {
        client.plate = plate;
    }
    await client.save();
    return client;
}
