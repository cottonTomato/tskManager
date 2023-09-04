import { Router } from "express";
import { getAllTasks, getTask, updateTask, deleteTask, createTask } from "../controllers/tasks";

const router = Router();

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default router;