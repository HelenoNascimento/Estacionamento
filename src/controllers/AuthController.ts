
const { validationResult, matchedData} = require('express-validator');
const bodyParser = require('body-parser');
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotevn from "dotenv";

import { Request, Response} from 'express';

import User from '../models/User';
import * as AuthService from '../services/AuthService';

dotevn.config();

    export const signin = async (req: Request, res: Response) =>{
        const {email, password} = req.body;
        console.log("recebendo"+email,password)
        const errors = validationResult(req.body);
        if(!errors.isEmpty()){
            res.json({error: errors.mapped()})
            return
        }

        const data = matchedData(req.body)
        console.log(data)

        const user =  await AuthService.getUser(email);
            if(!user){
                res.json({error: "E-mails e/o senha errados!"});
                return
            }

            //validando a senha
            const match = await bcrypt.compare(password, user.password);
            if(!match){
              res.json({error: "E-mails e/o senha errados!"});
              return
            }

            const token = jwt.sign({id: user._id, email: user.email }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

          
        res.json({user:user, token})
    }



    export const signup = async (req: Request, res: Response) => {
        const { name, email, password } = req.body;
      
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
          res.json({ error: errors.mapped() });
          return;
        }
      
        const user =  await AuthService.getUser(email);
        console.log(user)
        console.log(email)
      
        if(user) {
          res.json({ error: { msg: "Email já cadastrado!" } });
          return;
        }

        const token = await AuthService.newUser(name, email, password);
       
      
        res.json({ message: "Usuário criado com sucesso!",token: token  });
      };