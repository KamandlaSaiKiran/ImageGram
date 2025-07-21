import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from "../repositories/userRepository.js";
import { generateJwtToken } from '../utils/jwt.js';
export const signupUserService=async (user)=>{
    try{
        console.log("inside the service", user);
        const newUser = await createUser(user);
        return newUser;
    }catch(error){

        console.log(error);

        if(error.name==='MongoServerError' && error.code === 11000){
            throw{
                status:400,
                message:"User with the same email or username already exists"
            }
        }

        throw error;
    }
}
export const signinUserService = async(userDetails)=>{
        try{
        //check if there is a valid registered user with email
        const user = await findUserByEmail(userDetails.email);
        if(!user){
            throw{
                status:404,
                message:"user not found",
            }
        }
    
        //Compare the password {bcrpyt provides compare function to compare  plain password and hash password}
        const isPasswordValid = bcrypt.compareSync(userDetails.password,user.password);
        if(!isPasswordValid){
            throw{
                status:401,
                message:"Invalid Password"
            }
        }
    
        const token = generateJwtToken({
            email:user.email,
            _id:user._id,
            username:user.username,
            role:user.role || "user"
        });
        return token;
    }
    catch (error) {
        throw error;
    }
}
export const checkIfUserExists = async (email) => {
    try {
        console.log(email);
        const user = await findUserByEmail(email);
         console.log("👤 User from DB:", user);
         return user;
    } catch (error) {
        throw error;
    }
}

