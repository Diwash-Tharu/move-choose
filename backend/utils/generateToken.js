import jwt from 'jsonwebtoken';
import { ENC_VARS } from '../config/envVars.js';

export const genearateTokenAndSetCookie = (userId, res) => {
 const  token =jwt.sign({userId},ENC_VARS.JWT_SECRET,{expiresIn: '30d'});

 res.cookie('jtw-netflix',token,{
    maxAge: 30*24*60*60*1000,// in 30 dysa
    httpOnly: true,// prevent XSS attacks cross-site scripting attacks, make it not accersbile by the javascrpts
    samaSite: "strict", // csRF sttacks cross-site request forgery
    secure:ENC_VARS.NODE_ENV !== 'development', // only works in production mode
});

return token;
}
