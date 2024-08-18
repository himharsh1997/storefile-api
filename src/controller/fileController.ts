import { Request, Response } from 'express';
import { MainController } from './mainController';
import { FileBiz} from '../biz/fileBiz';

export class FileController extends MainController {

  async uploadFile(req: Request, res: Response): Promise<Response> {
    try {
const fileBizObj = new FileBiz();
await fileBizObj.uploadFile('');
    } catch (err) {
      return super.handlerFailure(err, res);
    }
  }

  async getUserFiles(req: Request, res: Response): Promise<Response>{
    try {
        const result = {};
        return res.send(result).status(200);
    } catch (err) {
      return super.handlerFailure(err, res);
    }
  }
}