import { UserSchema } from '../schema';
import { Model } from 'mongoose';
import { User } from 'model';

export class UserQuery {
  client: Model<User>;
  constructor() {
    this.client = UserSchema();
  }

  async getByEmail(email: string): Promise<User>{
    return await this.client.findOne({email});
  }
}