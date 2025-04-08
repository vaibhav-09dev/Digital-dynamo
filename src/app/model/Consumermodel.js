import  mongoose from "mongoose";

const ConsumerSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    subject:{
        type:String,
        required:true

    },
    message:{
        type:String,
        required:true

    },
    phone:{
        type:Number,
        required:true

    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})
export default mongoose.models.consumer || mongoose.model("consumer",ConsumerSchema);