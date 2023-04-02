import { RequestHandler } from "express";
import { Task } from "../models/task";

export const getTasks: RequestHandler = async (req, res) => {
    let tasks = await Task.findAll();
    res.status(200).json(tasks);
}

export const createTask: RequestHandler = async (req, res) => {
    let newTask: Task = req.body;

    if (newTask.title) {
        let created = await Task.create(newTask);
        res.status(201).json(created);
    }
    else {
        res.status(404).json({ error: 'No task to add' });
    }
};

export const editTask: RequestHandler = async (req, res) => {
    const taskId = req.params.id;
    const task = await Task.findByPk(taskId);
    if (!task) {
        res.status(404).json({ error: 'Task not found' });
        return;
    }
    task.title = req.body.title;
    task.completed = req.body.completed;
    await task.save();
    res.json(task);
};

export const deleteTask: RequestHandler = async (req, res) => {
    const taskId = req.params.id;
    const task = await Task.findByPk(taskId);
    if (!task) {
        res.status(404).json({ error: 'Task not found' });
        return;
    }
    await task.destroy();
    res.json({ message: 'Task deleted' });
};