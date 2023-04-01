import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.listen(3000);