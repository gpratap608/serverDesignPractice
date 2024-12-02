import mongoose,{Schema} from "mongoose";

const  paymentSchema = new Schema({
    status:{
        type:Boolean,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    accountNumber:{
        type:true,
    },
    upiId:{
        type:true
    },
    ifscCode:{
        type:true
    }
},{
    timestamps:true
})

export const Payment = mongoose.model("Payment",paymentSchema)