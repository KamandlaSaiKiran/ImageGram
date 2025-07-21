import dotenv from 'dotenv';
dotenv.config();//It will load all the environment variables
export const DB_URL = process.env.DB_URL;//as .env constants are not exposable we are exposing DB_URL in a encoded fashion
export const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_CLOUD_NAME=process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET;
export const JWT_SECRET=process.env.JWT_SECRET;