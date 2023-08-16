import User from "../models/user.model.js";

const controller = {
    getUser : (req,res) =>{

    }, 
    createUser : async (req,res ) =>{
        try {
            const newUser = await User.create(req.body)
            return res.status(201).json({
                success:true,
                message: 'User created'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false,
                message:'Error at creating user'
            })
        }
    }
}

export default controller