import { Response } from 'express';
import { CommonError } from '../model/index';

export class MainController {

  handlerFailure(err: CommonError, res: Response): Response {
    const { message, statusCode = 500 } = err;
    return res.status(statusCode).header('Content-Type', 'application/json').send({ message });
  }

  handlerSuccess(data: unknown, res: Response): Response {
    return res.status(200).header('Content-Type', 'application/json').send(data);
  }
}