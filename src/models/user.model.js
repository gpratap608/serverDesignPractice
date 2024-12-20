import mongoose,{Schema} from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    phoneNumber:{
        type:Number,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    refreshToken:{
        type:String
    },
    AccountDetails:{
        type:String
    }
},{
    timestamps:true
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password,10)
    next()
})

export const User = mongoose.model("User",userSchema)