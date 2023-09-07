import { Schema,model,Types } from "mongoose";

const collection = 'users'

const schema = new Schema({
    name: {type:String,required:true},
    image:{type:String, required:true},
    email: {type:String,required:true},
    password:{type:String,required:true},
    online: {type:Boolean,default:false},
    verify: {type:Boolean, default:true},
    verified_code: {type: String}
},{
    timestamps:true
})

const User = model(collection,schema)

export default User