import { Schema, model, Model, connection} from 'mongoose';


type ParkingType = {
    name: string,
    address: string,
    available_vacancies: number,
    total_vacancies: number,
    price_hour: number,
    price_daily: number,
    price_monthly: Number,
    opening_hours: string,
}

const schema = new Schema <ParkingType>({
    name: String,
    address: String,
    available_vacancies: Number,
    total_vacancies: Number,
    price_hour: Number,
    price_daily: Number,
    price_monthly: Number,
    opening_hours: String,

})
const modelName: string = "Parking";
export default (connection && connection.models[modelName])?
connection.models[modelName]  as Model <ParkingType>
:
model <ParkingType>(modelName, schema);


