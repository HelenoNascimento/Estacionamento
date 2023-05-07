
import { Request, Response} from 'express';
import * as ParkingService from '../services/ParkingService';
import * as MovementService from '../services/MovementService';



export const ping = async (req: Request, res: Response) =>{
    res.json({pong: true});
}

export const getParking = async (req: Request, res: Response) =>{
   let parking = await ParkingService.getParking();
    res.json({parking: parking});
}

export const getAllVacancies = async(req: Request, res: Response) =>{
    let  vacancies = await ParkingService.getAllVacancies();
    res.json({Vagas: vacancies});
}

export const getAvailable = async(req: Request, res: Response) =>{
    let vacacies = await ParkingService.getAvailable();
    res.json({Vagas: vacacies});
}
export const getUnavailable = async(req: Request, res: Response) =>{
    let vacacies = await ParkingService.getUnavailable();
    res.json({Vagas: vacacies});
}

export const exitCar = async(req: Request, res: Response) =>{
    const { number } = req.body;
    if(!number){
        res.json({error: "Vaga não fornecida"});
        return;
    }
    let vacanciesNumber =  await ParkingService.getVacanciesNumber(number);
    if(!vacanciesNumber){
        res.json({error: "Vaga não encontrada"});
        return;
    }
    if(vacanciesNumber.available){
        res.json({error: "Vaga ja vazia"});
        return;
    }
    let vacacies = await ParkingService.exitCar(number);
    res.json({success: vacacies});

}

export const entryCar = async(req: Request, res: Response) => {
    const {number, plate} = req.body;

    if(!number){
        res.json({error: "Vaga não fornecida"});
        return;
    }
    if(!plate){
        res.json({error: "Placa não fornecida"});
        return;
    }

    let vacanciesNumber =  await ParkingService.getVacanciesNumber(number);
    if(!vacanciesNumber){
        res.json({error: "Vaga não encontrada"});
        return;
    }
    if(!vacanciesNumber.available){
        res.json({error: "Vaga ja ocupada"});
        return;
    }
    let vacacies = await ParkingService.entryCar(plate, number);
    let moviment = await MovementService.MovimentEntry(plate, number);
    res.json({success: vacacies,moviment });

}
export const newAutoVacancie = async(req: Request, res: Response) =>{
    let type = "carro" 
    let vacanciesNumber = await ParkingService.getLasVacancieNumber();
    let number = vacanciesNumber?.number
    if(!vacanciesNumber){
        res.json({error: "Numero de vaga indisponivel"})
        return;
    }
    if(!number){
        res.json({error: "Numero de vaga indisponivel"})
        return;
    }
    const vacancies = await ParkingService.newVacancies(number+1,type)
     res.json({vaga: vacancies});
}

export const newVacancie = async(req: Request, res: Response) =>{
    const { number, type} = req.body;
    let vacanciesNumber =  await ParkingService.getVacanciesNumber(number);
    
    if(vacanciesNumber){
        res.json({error: "Numero de vaga indisponivel"})
        return;
    }
   const vacancies = await ParkingService.newVacancies(number,type)

   res.json({vaga: vacancies});
}

export const MovimentEntry = async(req: Request, res: Response) =>{
    const {number, plate} = req.body;


    let vacanciesNumber =  await ParkingService.getVacanciesNumber(number);
    if(!vacanciesNumber){
        res.json({error: "Vaga não encontrada"});
        return;
    }
    if(!vacanciesNumber.available){
        res.json({error: "Vaga ja ocupada"});
        return;
    }

   let moviment = await MovementService.MovimentEntry(number, plate);
    res.json({moviment: moviment});
}



