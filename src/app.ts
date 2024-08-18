import express from 'express';
import mongoose from 'mongoose';

import { userRoute } from './route';
// import { auth } from 'express-oauth2-jwt-bearer';
import { config } from 'dotenv';
// import path from 'path';
// console.log(path.resolve(process.cwd(), '.env'));
config()
mongoose.connect(process.env.MONGODB_ENDPOINT);

const app = express();
const port = 8081;

app.use(express.json());

// app.use(auth({audience: process.env.AUTH0_ISSSER, issuerBaseURL: process.env.AUDIENCE}));
app.use('/user/auth', userRoute);

app.use

app.get('/test', (req, res)=>{ res.status(500).send('Internal Server Error')});

app.listen(port, () =>
  console.log(`Express is listening at http://localhost:${port}`)
);
