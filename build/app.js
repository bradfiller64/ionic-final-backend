"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const models_1 = require("./models");
//middleware
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:8100', 'http://localhost:3001']
};
app.use(cors(corsOptions));
// routes
app.use('/api/tasks', taskRoutes_1.default);
app.use((req, res, next) => {
    res.status(404).end();
});
//sync database
models_1.db.sync({ alter: true }).then(() => {
    console.info("You're connected to the database!");
});
app.listen(3000);
