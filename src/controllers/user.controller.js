import {asyncHandler} from "../utils/asyncHandler.js"
import { APIresponse } from "../utils/APIresponse.js"
import { APIerror } from "../utils/APIerror.js"
import { User } from "../models/user.model.js"


const registerUser = asyncHandler(async (req,res)=>{
    const {name,email,phoneNumber,password,address}=req.body
    if(
        [name,email,phoneNumber,password,address].some((field)=>field?.trim()==="")
    ){
        throw new APIerror(400,"No empty fields are allowed")
    }

    const existingUser = await User.findOne({
        $or:[{phoneNumber},{email}]
    })

    if(existingUser){
        throw new APIerror(400,"User already exists")
    }

    const user = await User.create({
        name,
        phoneNumber,
        email,
        address,
        password 
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken -AccountDetails"
    )

    return res.
    status(200)
    .json(
        new APIresponse(
            200,
            createdUser,
            "User Registered Succesfully"
        )
    )
})

export {
    registerUser
}