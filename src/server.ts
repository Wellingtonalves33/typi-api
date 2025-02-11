import 'dotenv/config';
import express, { json } from 'express';
import { set } from 'mongoose';
import { setupMongo } from './database';
import { routes } from './routes';

setupMongo().then(() => {
  const app = express();

  app.use(json());
  app.use(routes);

  app.listen(3333, () => console.log('🚀 App is ruinning at port 3333!'));
});
