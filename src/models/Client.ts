import { Schema, model, Model, connection} from 'mongoose';


type  clientType = {
    name: string,
    cpf: number,
    telefone: string,
    email: string,
    endereco: string
    plate: string
}

const schema = new Schema <clientType>({
    name: String,
    cpf: Number,
    telefone: String,
    email: String,
    plate: String,
})

const modelName: string = "Client";
export default (connection && connection.models[modelName])?
connection.models[modelName] as Model<clientType>
:
model<clientType>(modelName, schema);