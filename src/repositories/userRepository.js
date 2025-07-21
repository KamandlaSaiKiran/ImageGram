import User from "../Schema/user.js";


export const findUserByEmail= async(email)=>{
    try{
        const user = await User.findOne({email});
        return user;
    }
    catch(error){
        console.log(error)
    }
}
export const findAllUsers= async ()=>{
        try{
            const users = await User.find();
            return users;
        }
        catch(error){
            console.log(error);
        }
}
export const createUser = async (user)=>{
    try{
        console.log("inside the repository", user);
    const newUser = await User.create(user);
    return newUser;
    }
    catch (error){
        console.log("Inside the Repository of Create user",error);
        throw error;
    }


}