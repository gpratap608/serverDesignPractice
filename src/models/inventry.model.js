import mongoose,{Schema} from 'mongoose'

const inventrySchema = new Schema({
    style:{
        type:String,
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
    stock:{
        type:Number,
        require:true
    }
},{
    timestamps:true
})

export const Inventry=mongoose.model("Inventry",inventrySchema)