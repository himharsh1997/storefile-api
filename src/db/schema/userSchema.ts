import { Schema, model } from 'mongoose';
import { Collection } from '@config'; 

const User = new Schema({
  email: {type: String, notNull: true},
  name: { type: String, notNull: true},
  phone_no: {type: String, default: '', maxLength: 20},
  created_at: {type: Date, default: Date.now()},
  updated_at: {type: Date, default: Date.now()}
})

export const UserSchema = new (model(Collection.USER, User))();