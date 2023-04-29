
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotevn from "dotenv";
dotevn.config();

export const getUser = async(email: string) => {
    let user = await User.findOne({ email: email });
     return user;
}

export const newUser = async (  name: string, email: string, password: string,) =>{
    const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
          name,
          email,
          password: passwordHash,       
        });
      
        await newUser.save();
        let token = jwt.sign({id: newUser._id, email: newUser.email }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        return token;
}