import express from 'express';
import UserRoute from './route/user';
import { auth} from 'express-oauth2-jwt-bearer';
import {config} from 'dotenv';
import path from 'path';
config({path: path.resolve(process.cwd(), '.env')})

const app = express();
const port = 3000;

app.use(auth({audience: process.env.AUTH0_ISSSER, issuerBaseURL: process.env.AUDIENCE}));
app.use('/user/auth', UserRoute);

app.get('/test', (req, res)=>{ res.status(500).send('Internal Server Error')});

app.listen(port, () =>
  console.log(`Express is listening at http://localhost:${port}`)
);
