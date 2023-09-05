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

function getTask(req: Request, res: Response) {
    res.send('Job Sucess..');
}

function updateTask(req: Request, res: Response) {
    res.send('Job Sucess..');
}

function deleteTask(req: Request, res: Response) {
    res.send('Job Sucess..');
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