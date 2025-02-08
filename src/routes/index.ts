import { Router } from 'express';

import { baseRouters } from './base.route';
import { categoriesRoutes } from './categories.route';

export const routes = Router();

routes.use('/', baseRouters);
routes.use('/categories', categoriesRoutes);
