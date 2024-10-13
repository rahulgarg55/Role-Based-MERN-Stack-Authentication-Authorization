import express from 'express';
import {Getuser,deleteUser} from '../controllers/Admin.js';
import {isAdmin} from '../middleware/verifyToken.js';   

const AdminRoutes= express.Router();
AdminRoutes.get('/getUser',isAdmin,Getuser);
AdminRoutes.post('delete/:id',isAdmin,deleteUser);




export default AdminRoutes; 