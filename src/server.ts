import express, { json } from 'express';
import { routers } from './routes';

const app = express();

app.use(json());
app.use(routers);

app.listen(3333, () => console.log('🚀 App is ruinning at port 3333!'));
