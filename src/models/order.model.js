import mongoose,{Schema} from "mongoose";

const orderSchema = new Schema({
    orderBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    material:{
        type:String,
        require:true
    },
    color:{
        type:String,
        require:true
    },
    size:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    payment:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    }
},{
    timestamps:true
})

export const Order = mongoose.model("Order",orderSchema)