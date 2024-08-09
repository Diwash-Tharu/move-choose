import jwt from 'jsonwebtoken';
import { User } from '../models/user.model,js';
import { ENC_VARS } from '../config/envVars.js';

export const protectRoute = async (req, res, next) => {
try{
    const token=req.cookies['jtw-netflix']
}
catch(error){
    console.log("error from protectRoute",error.message);
}
}