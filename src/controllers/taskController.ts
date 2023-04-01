import { RequestHandler } from "express";
import { Task } from "../models/task";

export const getTasks: RequestHandler = async (req, res, next) => {
    let tasks = await Task.findAll();
    res.status(200).json(tasks);
}

export const createTask: RequestHandler = async (req, res, next) => {
    const task = await Task.create(req.body);
    res.json(task);
};