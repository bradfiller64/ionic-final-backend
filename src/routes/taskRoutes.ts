import { Router } from 'express';
import { createTask, deleteTask, editTask, getTasks } from '../controllers/taskController';

const router = Router();

router.get('/', getTasks) // returns all tasks
router.post('/', createTask); // creates task
router.put('/:id', editTask); // updates task
router.delete('/:id', deleteTask); // deletes task

export default router;