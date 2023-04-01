import { Router } from 'express';

const router = Router();

router.get('/') // returns all tasks
router.post('/'); // creates task
router.put('/:id'); // updates task
router.delete('/:id'); // deletes task

export default router;