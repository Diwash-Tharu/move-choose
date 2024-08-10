import jwt from 'jsonwebtoken';
import { User } from '../models/user.model,js';
import { ENC_VARS } from '../config/envVars.js';

export const protectRoute = async (req, res, next) => {
try{
    const token=req.cookies['jtw-netflix']

    if(!token){
        return res.status(401).json({success:false,message: 'You are not authorized to access this route'});
    }

    const decoded = jwt.verify(token, ENC_VARS.JWT_SECRET);

    if(!decoded){
        return res.status(401).json({success:false,message: 'You are not authorized to access this route'});
    }
    const user = await User.findById(decoded.userId).select('-password');

    if(!user){
        return res.status(401).json({success:false,message: 'You are not authorized to access this route'});    
    }
    

}
catch(error){
    console.log("error from protectRoute",error.message);
}
}