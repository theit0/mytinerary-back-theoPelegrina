import { Schema,model,Types } from "mongoose";


const collection = 'cities'

const schema = new Schema({
    name: {type:String,required:true},
    country: {type:String,required:true},
    img: {type:String,required:true},
    descr: {type:String, required:false},
    user: {type:Types.ObjectId, ref:'users'},
    itineraries: [{ type: Types.ObjectId, ref: 'Itinerary' }]
},{
    timestamps:true
})

const City = model(collection,schema)

export default City