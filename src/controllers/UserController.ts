
import { Request, Response } from 'express';
import User from '../models/User';


export const newUser = async (req: Request,res: Response) =>{
    let {name, password, email} = req.body


    let newUser = await User.create({name, password,email});

    res.json({newUser: newUser})
}

export const listUser = async (req: Request, res: Response) =>{

    let users = await User.find();
   res.json({users: users})
}
