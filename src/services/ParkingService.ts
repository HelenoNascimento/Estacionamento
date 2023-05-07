import Parking from '../models/Parking';
import Vacancies from '../models/Vacancies';

export const getParking = async() =>{
    let vaAvailable = await Vacancies.find({available: true})
    let total_vacancies = await Vacancies.find();
 
    let parking = await Parking.findOne();
    if(parking){
        parking.available_vacancies = parseInt(vaAvailable.length.toString());
        parking.total_vacancies = parseInt(total_vacancies.length.toString());
        await parking.save();
        return parking;
    }
return 
}
export const getAllVacancies = async() =>{
    return await Vacancies.find();
}

export const getAvailable = async() =>{
    return await Vacancies.find({available: true})
}
export const getUnavailable = async() =>{
    return await Vacancies.find({available: false})
}

export const getVacanciesNumber= async(number: number) => {
    return await Vacancies.findOne({number: number});
}

export const getLasVacancieNumber = async () => {
    try {
      const ultimo_registro = await Vacancies.findOne().sort({ _id: -1 });
      return ultimo_registro
    } catch (err) {
      console.error(err);
    }
};



export const entryCar = async(plate: string, number: number) => {
    let vacancies = await Vacancies.findOne({number: number});

    if(!vacancies){
        return
    }
    vacancies.available = false;
    vacancies.occupied_by = plate;
    await vacancies.save();
    return vacancies;
  };

export const exitCar = async(number: number) =>{
    let vacancies = await Vacancies.findOne({number: number});
    if(!vacancies){
        return
    }
    vacancies.available = true;
    vacancies.occupied_by = '';
    await vacancies.save();
    return vacancies;
}

export const newVacancies = async(number: number, type:string) =>{

    let park = await Parking.find();
     console.log(park);

    let newVacancie = new Vacancies ({
        number,
        type,
        available: true,
        occupied_by: null,
        parking: '644ae6d3d622bb9c7f69790f'
    })

    await newVacancie.save();

    return newVacancie;

}