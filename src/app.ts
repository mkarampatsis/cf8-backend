import express from "express";
import morgan from "morgan";
import cors from 'cors';

import userRoutes  from './routes/user.routes';
import roleRoutes from './routes/role.routes';
import authRoutes from './routes/auth.routes';

import {setupSwagger} from './swagger';

const app = express();

setupSwagger(app);

app.use(morgan('dev'));
app.use(express.json());

app.use(cors({
  // origin: '*'
  origin: ['http://localhost:4200']
}));

app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/auth', authRoutes);

export default app;