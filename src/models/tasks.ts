import { Schema, model } from "mongoose";

interface ITask {
    name: string,
    completed: boolean
}

const taskSchema = new Schema<ITask>({
    name: { type: String, 
            required: [true, "Task name is Required"], 
            maxlength: [20, "Task name must not exceed 20 charecters."], 
            trim: true  },
    completed: { type: Boolean, 
            default: false },
})

const Task = model<ITask>('Task', taskSchema);

export default Task;