import dotenv from 'dotenv';
dotenv.config();

interface Config {
    userDb: string;
    passDb: string;
    tokenSecret: string;
}

export const config: Config = {
    userDb: process.env.USER_DB || '',
    passDb: process.env.PASS_DB || '',
    tokenSecret: process.env.TOKEN_SECRET || '',
};