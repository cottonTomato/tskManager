import express from 'express';
import { connect } from 'mongoose';
import tasks from './routes/tasks';
import { config } from 'dotenv';
config();

const tasksBaseURL = '/api/v1/tasks';
const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(tasksBaseURL, tasks);

async function start() {
    try {
        const connection = await connect(process.env.MONGO_URI!, {
            "dbName": "TaskManager"
        });

        app.listen(PORT, function () {
            console.log(`Server Listininga at ${process.env.PORT ?? PORT}`);
        });

    } catch (err) {
        console.log(err);
    }
}

start();