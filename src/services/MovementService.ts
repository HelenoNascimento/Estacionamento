import { calculatePricePerHour } from '../helpers/priceCalculator';
import Moviment from '../models/Movement';


export const MovimentEntry = async (plate: string, vacancie: number) =>{
    let newMoviment = new Moviment({
        vacancie,
        plate,
        start_date: Date.now(),
        end_date: null,
        price: 0,
    })
   
    return await newMoviment.save();
}


export const MovimentExity = async (plate: string, vacancie: number) =>{

    let moviment = await Moviment.findOne({ plate: plate, vacancie: vacancie, end_date: null });
    if(!moviment){
        return
    }
   moviment.end_date = new Date(Date.now());

   let price = calculatePricePerHour(moviment.start_date, moviment.end_date);
   moviment.price = price;
   console.log(moviment);
   console.log(price);
   return await moviment.save();

}

