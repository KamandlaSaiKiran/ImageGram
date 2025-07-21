import express from 'express';
import v1 from "./v1/routerV1.js"

const router = express.Router();
// router.use(express.json());
// router.use(express.text());

router.use('/v1',v1)

export default router;