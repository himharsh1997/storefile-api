import { Router } from 'express';

export const app = Router();

app.use('/signup', (req, res) => {
  console.log(req);
  res.status(200).send('Hello world');
});

app.use('/login', (req, res) => {
  console.log(req);
  res.status(200).send('Hello world');
});

export default app;
