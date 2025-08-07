import mongoose, {Schema} from "mongoose";

const User  = new mongoose.Schema({
    username:{type:String,required:true, unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    joinedRoom:[{type:Schema.Types.ObjectId,required:true}],
},{timestamps:true});

export default mongoose.model("User",User);