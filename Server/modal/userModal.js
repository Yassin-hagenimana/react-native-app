import mongoose from "mongoose"
const userSchema=new mongoose.Schema(
    {
      name:{
          type:String,
          required:true,
        },
      email:{
        type:String,
        required:true,
        unique:true,
        match: [
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          'Please add a valid email',
        ],
      },
      password:{
        type:String,
        required:true,
      },
      isAdmin:{
        type:Boolean,
        default:false,
        required:true
      },
      location:{
        type:String,
        required:true,
      },
      country:{
        type:String,
        required:true,
      },
      phoneNumber:{
        type:String,
        required:true,
      }
},
{
    timestamps:true
}
)

const User=mongoose.model("User",userSchema)
export default User;