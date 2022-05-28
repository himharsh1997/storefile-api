import { UserSchema } from '../schema';
import mongoose from 'mongoose';
import { User } from 'model';

export class UserQuery {
  client: mongoose.Model<User>;
  constructor() {
    this.client = mongoose.model('user', UserSchema);
  }

  async getByEmail(email: string): Promise<User> {
    return await this.client.findOne({ email });
  }

  async createUser(userInfo: User): Promise<void> {
    await this.client.create(userInfo);
  }
}