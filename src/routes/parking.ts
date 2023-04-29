import { Router } from 'express';


import * as ParkingController from '../controllers/ParkingController'
import * as UserController from '../controllers/UserController';
import * as AuthController  from '../controllers/AuthController';
import * as ClientController from '../controllers/ClientController';


import * as auth from '../middlewares/RequireAuth'

import User from '../models/User';

import { signinValidator, validateSignup } from  '../middlewares/AuthValidator';
import { validateClient } from '../middlewares/ClientValidator';

const router = Router();

router.post('/singnin',signinValidator , AuthController.signin);
router.post('/signup',validateSignup, AuthController.signup);


//client
router.get('/auth/client',auth.requireAuth, ClientController.listClient);
router.post('/auth/client/new',auth.requireAuth, validateClient, ClientController.newClient);
router.put('/auth/client/edit/:id', auth.requireAuth,validateClient, ClientController.editClient);
router.get('/auth/client/:id',auth.requireAuth, ClientController.getClient);


//login
router.get('/auth/user',auth.requireAuth, UserController.listUser);
router.get('/auth/ping',auth.requireAuth, ParkingController.ping);


//parking
router.get('/', ParkingController.getParking);
router.get('/vagas',auth.requireAuth, ParkingController.getAllVacancies);
router.get('/vagas/disponiveis',auth.requireAuth,  ParkingController.getAvailable);
router.get('/vagas/indisponiveis',auth.requireAuth, ParkingController.getUnavailable);
router.put('/vaga/entry',auth.requireAuth, ParkingController.entryCar);
router.put('/vaga/exit',auth.requireAuth, ParkingController.exitCar);
router.post('/vaga/add',auth.requireAuth, ParkingController.newVacancie);
router.post('/user/add',auth.requireAuth, UserController.newUser)



export default router;