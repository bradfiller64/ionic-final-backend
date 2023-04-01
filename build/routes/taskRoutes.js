"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
router.get('/', taskController_1.getTasks); // returns all tasks
router.post('/', taskController_1.createTask); // creates task
router.put('/:id', taskController_1.editTask); // updates task
router.delete('/:id', taskController_1.deleteTask); // deletes task
exports.default = router;
