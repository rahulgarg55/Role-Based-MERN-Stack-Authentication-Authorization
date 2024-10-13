import express from 'express';
import register from '../controllers/AuthController.js';
import Login from '../controllers/AuthController.js';   
const AuthRouter = express.Router();   

AuthRouter.post('/register',register);
AuthRouter.post('/login',Login);

export default AuthRouter; 