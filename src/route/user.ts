import { Router } from 'express';
import { UserController } from '../controller/userController';

export const userRoute = Router();
const userController = new UserController();

userRoute.post('/signup', userController.signUpUser);

userRoute.post('/login', userController.loginUser);