import { Request, Response } from 'express';
import { MainController } from './mainController';
import { UserBiz } from '../biz/userBiz';

export class UserController extends MainController {

  async signUpUser(req: Request, res: Response): Promise<Response> {
    try {
      const userBizObj = new UserBiz();
      const result = await userBizObj.handlerSignup(req.body);
      return super.handlerSuccess(result, res);
    } catch (err) {
      return super.handlerFailure(err, res);
    }
  }

  async loginUser(req: Request, res: Response): Promise<Response>{
    try {
      const userBizObj = new UserBiz();
      const result = await userBizObj.handlerLogin(req.body);
      return super.handlerSuccess(result, res);
    } catch (err) {
      return super.handlerFailure(err, res);
    }
  }
}