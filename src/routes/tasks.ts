import { Router } from "express";
import { getAllTasks, getTask, updateTask, deleteTask, addTask } from "../controllers/tasks";

const router = Router();

router.route('/').get(getAllTasks).post(addTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default router;