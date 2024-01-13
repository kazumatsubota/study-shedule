/**
 * Setup express server.
 */

import morgan from 'morgan';
import express from 'express';

import 'express-async-errors';

import HeatbeatRouter from '@src/routes/heartbeat';
import UserRouter from '@src/routes/rpcs/users';
import DaysOfWeeekRouter from '@src/routes/rpcs/days_of_week';
import SchedulesRouter from '@src/routes/rpcs/schedules';
import RecordsRouter from '@src/routes/rpcs/records';

// import HttpStatusCodes from '@src/constants/HttpStatusCodes';


// **** Variables **** //

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Logger
app.use(morgan('tiny'));


// Router
app.use('/', HeatbeatRouter);
app.use('/api/', UserRouter);
app.use('/api/', DaysOfWeeekRouter);
app.use('/api/', SchedulesRouter);
app.use('/api/', RecordsRouter);



// **** Export default **** //

export default app;
