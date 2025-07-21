import express from 'express';
import { signin, signup } from '../../controller/userController.js';
import { zodSignupSchema } from '../../validators/zodsignupSchema.js';
import { validate } from '../../validators/zodValidator.js';
import { isAuthenticated } from '../../middleware/authMiddleware.js';
import { zodSigninSchema } from '../../validators/zodsigninSchema.js';
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());
/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */
router.post('/signup', validate(zodSignupSchema), signup);

/**
 * @swagger
 * /users/signin:
 *   post:
 *     summary: Log in an existing user
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Login successful, returns token
 *       401:
 *         description: Unauthorized or invalid credentials
 */
// router.post('/signin', validate(zodSignupSchema), isAuthenticated, signin);
router.post('/signin',validate(zodSigninSchema), signin);

export default router;