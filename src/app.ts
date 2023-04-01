import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import taskRoutes from './routes/taskRoutes';
import { db } from './models';

//middleware
const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:3001']
};
app.use(cors(corsOptions));

// routes
app.use('/api/tasks', taskRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

//sync database
db.sync({ alter: true }).then(() => {
    console.info("You're connected to the database!")
});

app.listen(3000);