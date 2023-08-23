import { Schema,model,Types } from "mongoose";


const collection = 'itineraries'

const schema = new Schema({
    by: {type:String,required:true},
    price: {type:Number,required:true},
    img: {type:String,required:true},
    duration: {type:String, required:false},
    likes: {type:Number, required:false},
    hastags: [{type:String, required:false}],
    city: { type: Types.ObjectId, ref: 'City', required: true }
    /* activities: [{type:Types.ObjectId, ref:'activities'}] */
},{
    timestamps:true
})

const Itinerary = model(collection,schema)

export default Itinerary