import Moviment from '../models/Movement';


export const MovimentEntry = async (plate: string, vacancie: number) =>{
    let newMoviment = new Moviment({
        vacancie,
        plate,
        start_date: Date.now(),
    })
    return await newMoviment.save();
}
