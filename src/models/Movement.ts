import { Schema, model, Model, connection} from 'mongoose';

type MovementType = {
    vacancie: number,
    plate: string,
    start_date: Date,
    end_date: Date,
    price: number,

}

const schema = new Schema <MovementType>  ({
    vacancie: Number,
    plate: String,
    start_date: Date,
    end_date: Date,
    price: Number
});

const modelName: string = "Movement";
export default (connection && connection.models[modelName])?
connection.models[modelName]  as Model <MovementType>
:
model <MovementType>(modelName, schema)
