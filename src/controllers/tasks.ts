import type { Request, Response } from 'express';
import Task from '../models/tasks'

async function getAllTasks(req: Request, res: Response) {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ sucess: true, data: tasks });
    } catch (err) {
        res.status(500).json({ sucess: false, error: err });
    }
}

async function getTask(req: Request, res: Response) {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findById(taskId);

        if (!task) {
            res.status(404).json({ sucess: false, msg: `No Task with ID: ${taskId}`});
            return;
        }

        res.status(200).json({ sucess: true, data: task });
    } catch (err) {
        res.status(500).json({ sucess: false, error: err });
    }
}

async function updateTask(req: Request, res: Response) {
    try {
        const { id: taskId } = req.params;

        const task = Task.findByIdAndUpdate(taskId, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({ sucess: true, data: task });
    } catch (err) {
        res.status(500).json({ sucess: false, error: err });
    }
}

async function deleteTask(req: Request, res: Response) {
    try {
        const { id: taskId } = req.params;

        await Task.findOneAndDelete({ _id: taskId });

        res.status(200).json({ sucess: true, msg: `Task with ID: ${taskId} Deleted`});
    } catch (err) {
        res.status(500).json({ sucess: false, error: err });
    }
}

async function createTask(req: Request, res: Response) {
    try {
        await Task.create(req.body);
        res.status(200).json({ sucess: true, data: req.body});
    } catch (err) {
        res.status(500).json({ sucess: false, error: err });
    }
}


export {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
}