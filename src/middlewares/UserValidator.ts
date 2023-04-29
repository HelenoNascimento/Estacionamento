import { checkSchema, Schema } from 'express-validator';

module.exports = {
    editAction: checkSchema({
        name:{
            trim: true,
            isLength:{
                options:{ min:2}
            },
            errorMessage :"Nome precisa ter pelo menos 2 caracteres"
        },
        email:{
            isEmail: true,
            normalizeEmail: true,
            errorMessage: "email inválido"
        },
        password:{
            isLength:{
                options: {min: 4}
            },
            errorMessage: "Sua senha precisa ter no minimo 2 caracteres"
        }

    })
}

