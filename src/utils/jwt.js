
import { JWT_SECRET } from "../config/ServerConfig.js"
import jwt from 'jsonwebtoken'
export const generateJwtToken=(payload)=>{
    return jwt.sign(payload,JWT_SECRET,{expiresIn:'1d'})
}
export const verifyJwt = (token)=>{
    const response= jwt.verify(token,JWT_SECRET);
    console.log("Inside the verify JWT function",response);
    return response;
}