
import UserModel from "../models/user.js";

const register = async (req,res)=>{
try{
    const {name,email,password} = req.body;
   const existUser = await UserModel.findOne({email});
   if(existUser){
    return res.status(401).json({success:false,message:"User already Exists"});
   }
   const hashpassword = await bcryptjs.hashSync(password,10)
   const newUser = new UserModel({
    name,
    email,
    password:hashpassword
   })
   await newUser.save();
   res.status(201).json({success:true,message:"User Register Successfully"});
}
catch(error){
res.status(500).json({success:false,message:"Internal Server Error"});  
console.log(error);
}
}
const Login = async(req,res)=>{
    try{
          const {email,password} = req.body;
          const user = await UserModel.findOne({email});
          if(!user){
            return res.status(401).json({success:false,message:"User not Found"});  
          }
          const ispasswordValid = await bcryptjs.comapre(password, user.password);
          if(!ispasswordValid){
            return res.status(401).json({success:false,message:"Invalid Credentials"});
          }
          const token =jet.sign({userId:user._id},process.env.JWT_SECRET);
          res.cookie('token',token,{httpOnly:true,
            secure:false,
            maxAge:3600000,
          });   //http for security
          res.status(200).json({success:true,message:"Login Successfully", user,token});
    }catch(error){
    console.log(error); 
    }
}
const Logout = async(req,res)=>{
    try{
         res.clearCookie('token');
         res.status(200).json({message:"user Logout Successfully"});  
    }catch(error){
    console.log(error);
    }
}
export default {register,Login,Logout};    