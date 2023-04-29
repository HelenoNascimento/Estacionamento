
import { Request, Response, NextFunction } from "express";
import { check, validationResult } from 'express-validator';

export const validateSignup = [
  check('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Nome precisa ter pelo menos 2 caracteres'),
  check('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Email inválido'),
  check('password')
    .isLength({ min: 4 })
    .withMessage('Senha precisa ter pelo menos 4 caracteres'),
  (req :Request, res: Response, next:NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];



export const signinValidator = [
  check('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Email inválido'),
  check('password')
    .isLength({ min: 4 })
    .withMessage('Senha precisa ter pelo menos 4 caracteres'),
  (req :Request, res: Response, next:NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

export default {validateSignup, signinValidator};
