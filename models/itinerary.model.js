import { Schema,model,Types } from "mongoose";


const collection = 'itineraries'

const schema = new Schema({
    name: {type:String,required:true},
    by: {type:String,required:true},
    price: {type:Number,required:true},
    img: {type:String,required:true},
    duration: {type:String, required:false},
    likes: {type:Number, required:false},
    hastags: [{type:String, required:false}],
},{
    timestamps:true
})

const Itinerary = model(collection,schema)

export default Itinerary