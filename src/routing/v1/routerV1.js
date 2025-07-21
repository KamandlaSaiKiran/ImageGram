import express from 'express';
import postRouter from "./postRouter.js"
import userRouter from './userRouter.js'
const router = express.Router();
router.use('/posts',postRouter);
router.use('/users',userRouter);
export default router;