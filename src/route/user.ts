import { Router } from 'express';
import mongoose from 'mongoose';
import { AppConfig, Collection } from '@config';
import { UserQuery } from 'db/query/userQuery';

export const app = Router();

app.use('/signup', async (req, res) => {
  
  await mongoose.connect(AppConfig.MONGODB_ENDPOINT);
  // 1. check if user with same email already exist in db or not
  const userQuery = new UserQuery();
  const user = await userQuery.getByEmail('');
  if(user){
    return res.status(400).send({message: 'Account already exist with this email'});
  } 
  // 2. If yes return error(400) else proceed to next step
  
  // 3. Signup user in auth0 and in db also.
  // 4. return user with access token and refresh token

});

app.use('/login', (req, res) => {
  console.log(req);
  res.status(200).send('Hello world');
});

export default app;