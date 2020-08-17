import express, { Application } from 'express';
import morgan from 'morgan';
import path from 'path';

import indexRoutes from './routes/index';
import authRoutes from './routes/auth';

const app : Application = express();

// configuracion
app.set('port', process.env.PORT || 3000);
app.use(express.json());

// midleware
app.use(morgan('dev'));

// routes
app.use('/api', indexRoutes);
app.use('/api', authRoutes);

// cargar imagenes
app.use('/uploads', express.static(path.resolve('uploads')));





export default app