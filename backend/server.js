import express from 'express';  
import dotenv from 'dotenv';
import cors from 'cors';
import DBCon from './utils/db.js';  
import AuthRouter from './routes/Auth.js'; 
import AdminRoutes from './routes/AdminRoutes.js';  
import cookieparser from 'cookie-parser';  
dotenv.config();
const PORT = process.env.PORT || 3000;
const app=express();


//mongo db
DBCon();

app.use(express.json());
app.use(cookieparser());
app.use(cors());

app.use('/api/auth',AuthRouter);
app.use('/api/admin',AdminRoutes); 

app.get('/',(req,res)=>{
    res.send('Hello World');
}); 

app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`);   
})