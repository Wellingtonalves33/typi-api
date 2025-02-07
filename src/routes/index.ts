import { Router } from 'express';
import { baseRouters } from './base.route';

export const routers = Router();

routers.use('/', baseRouters);
