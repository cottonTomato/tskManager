import type { Request, Response } from 'express';

function getAllTasks(req: Request, res: Response) {
    res.send('Job Sucess..');
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

function createTask(req: Request, res: Response) {
    res.send('Job Sucess..');
}


export {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
}