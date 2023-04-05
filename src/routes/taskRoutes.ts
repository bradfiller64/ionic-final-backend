import { Router } from 'express';
import { createTask, deleteTask, editTask, getAllTasks, getTask } from '../controllers/taskController';

const router = Router();

router.get('/', getAllTasks) // returns all tasks
router.get('/:id', getTask) // returns one task
router.post('/', createTask); // creates task
router.put('/:id', editTask); // updates task
router.delete('/:id', deleteTask); // deletes task

export default router;