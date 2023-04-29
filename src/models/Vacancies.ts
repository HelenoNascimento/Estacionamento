
import { Schema, model, Model, connection, modelNames} from 'mongoose';

type  VacanciesType ={
    number: number,
    type: string,
    available: boolean,
    occupied_by: string,
    parking: string,
}

const schema = new Schema<VacanciesType>({
    number: Number,
    type: String,
    available: Boolean,
    occupied_by: String,
    parking: String
  });


const modelName: string = 'Vacancies';
export default (connection && connection.models[modelName])?
connection.models[modelName] as Model<VacanciesType>
:
model<VacanciesType>(modelName, schema);
