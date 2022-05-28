import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  email: { type: String, notNull: true },
  user_id: { type: String, notNull: true },
  is_email_verified: { type: Boolean, default: false },
  name: { type: String, notNull: true },
  phone_no: { type: String, default: '', maxLength: 20 },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});