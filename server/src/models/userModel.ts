import mongoose from 'mongoose';
import Joi from 'joi';
import jwt from 'jsonwebtoken';

interface IUser extends mongoose.Document {
    email: string;
    password: string;
    role: string;
}

const userSchema = new mongoose.Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
    },
});

export const UserModel = mongoose.model<IUser>('User', userSchema);

export const validUser = (user: any) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().valid('user', 'admin'),
    });
    return schema.validate(user);
};

export const validLogin = (user: any) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(user);
};

export const createToken = (id: string, role: string) => {
    return jwt.sign({ _id: id, role: role }, 'secretKey', { expiresIn: '1h' });
};
