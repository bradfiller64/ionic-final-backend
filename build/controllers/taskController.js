"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.editTask = exports.createTask = exports.getTasks = void 0;
const task_1 = require("../models/task");
const getTasks = async (req, res) => {
    let tasks = await task_1.Task.findAll();
    res.status(200).json(tasks);
};
exports.getTasks = getTasks;
const createTask = async (req, res) => {
    let newTask = req.body;
    if (newTask.title) {
        let created = await task_1.Task.create(newTask);
        res.status(201).json(created);
    }
    else {
        res.status(404).json({ error: 'No task to add' });
    }
};
exports.createTask = createTask;
const editTask = async (req, res) => {
    const taskId = req.params.id;
    const task = await task_1.Task.findByPk(taskId);
    if (!task) {
        res.status(404).json({ error: 'Task not found' });
        return;
    }
    task.title = req.body.title;
    task.completed = req.body.completed;
    await task.save();
    res.json(task);
};
exports.editTask = editTask;
const deleteTask = async (req, res) => {
    const taskId = req.params.id;
    const task = await task_1.Task.findByPk(taskId);
    if (!task) {
        res.status(404).json({ error: 'Task not found' });
        return;
    }
    await task.destroy();
    res.json({ message: 'Task deleted' });
};
exports.deleteTask = deleteTask;
