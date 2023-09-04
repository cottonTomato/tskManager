import { Schema, model } from "mongoose";

interface ITask {
    name: string,
    completed: boolean
}

const taskSchema = new Schema<ITask>({
    name: { type: String, required: true },
    completed: { type: Boolean, required: true },
})

const Task = model<ITask>('Task', taskSchema);

export default Task;