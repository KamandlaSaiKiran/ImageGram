import mongoose from "mongoose";
import brcypt from 'bcrypt';
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength:5,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:5,
        validate:{
            validator:function (emailValue){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message:'Invalid Email Format'
        }
    },
    password:{
        type:String,
        required:true,
        minLength:5
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]

    }
},{timestamps:true});
    
userSchema.pre('save',function modifyPassword(next){
    //here pre is specified that calls the modifyPassword callback before saving the record to db
    //here 'this' keyword provides access to userSchema properties
    console.log("This is calling the schema layer at this time");
    const user = this;
    const SALT = brcypt.genSaltSync(9); // 9 indicates the level of decrytption
    const hashedPassword = brcypt.hashSync(user.password,SALT);
    user.password=hashedPassword;
    next();

});

const user=mongoose.model("User",userSchema);


export default user;
