import express from 'express';
import tasks from './routes/tasks';

const tasksBaseURL = '/api/v1/tasks';

const app = express();

app.use(tasksBaseURL, tasks);

app.listen(process.env.PORT, function () {
    console.log(`Server Listininga at ${process.env.PORT}`);
});