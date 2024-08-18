import { Router } from 'express';
import { FileController } from '../controller/fileController';

export const userRoute = Router();

const fileController = new FileController();

userRoute.post('/uploadfile', fileController.uploadFile);

userRoute.post('/file/all', fileController.getUserFiles);