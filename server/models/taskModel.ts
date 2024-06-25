import mongoose from 'mongoose';
import joi from 'joi';

interface Task extends mongoose.Document {
    taskName: string;
    detail: string;
    icon: string;
    deadline: Date;
    missionAccomplished: boolean;
}

const taskSchema = new mongoose.Schema<Task>({
    taskName: {
        type: String,
        required: true,
    },
    detail: String,
    icon: String,
    deadline: {
        type: Date
    },
    missionAccomplished: {
        type: Boolean,
        default: false,
    }
})

export const TaskSchema = mongoose.model<Task>('Task', taskSchema);

export const validTask = (Task: any) => {
    const schema = joi.object({
        taskName: joi.string().min(3).required(),
    });
    return schema.validate(Task);
};

