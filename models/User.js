import mongoose from "mongoose";

//defining scchema
const userSchema =new mongoose.Schema({
    name: {type: String , required:true, trim:true },
    email: {type: String , required:true, trim:true },
    password: {type: String , required:true, trim:true },
    tc: {type: Boolean , required:true}
    
})

//Model creating
const UserModel = mongoose.model("user", userSchema)

export default UserModel