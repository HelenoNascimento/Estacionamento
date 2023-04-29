import { Schema, model, Model, connection} from 'mongoose';

type UserType = {
    name: string,
    email: string,
    password: string,
}


const schema = new Schema<UserType>({
    name: String,
    email: String,
    password: String,
})


const modelName: string = 'User';
export default (connection && connection.models[modelName])?
connection.models[modelName] as Model<UserType>
:
model<UserType>(modelName, schema);