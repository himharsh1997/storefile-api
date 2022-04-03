import express from 'express';
import UserRoute from './route/user';

const app = express();
const port = 3000;

app.use(UserRoute);

app.listen(port, () =>
  console.log(`Express is listening at http://localhost:${port}`)
);
