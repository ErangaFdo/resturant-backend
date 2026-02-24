import mongoose from "mongoose";

export interface Ifeedback extends Document{
    _id : mongoose.Types.ObjectId
    customername : string
    email : string
    ratings : number
    feedback : string
}

const feedbackSchema = new mongoose.Schema<Ifeedback>({
    customername : {type : String , required : true},
    email : {type : String , required : true},
    ratings : {type : Number , required : true},
    feedback : {type : String , required : true}
})

export const Feedback = mongoose.model<Ifeedback>("Feedback" , feedbackSchema)