import { Request, Response, NextFunction } from "express";
import { check, validationResult } from 'express-validator';

export const validateClient = [
  check('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Nome precisa ter pelo menos 2 caracteres'),
  check('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Email inválido'),
  check('cpf')
    .isLength({ min: 11 })
    .withMessage('Cpf inválido'),
    check('plate')
    .isLength({ min: 4 })
    .withMessage('placa invalida'),
  (req :Request, res: Response, next:NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];