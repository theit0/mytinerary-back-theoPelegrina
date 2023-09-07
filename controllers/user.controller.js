import User from "../models/user.model.js";

const controller = {
    getUser : async (req,res) =>{
        let queries = {}
        if(req.query.name) {
            queries.name = new RegExp(`^${req.query.name}`,'i')
        } 

        //Si quiero otra query hago otro if

        try {
            const users = await User.find(queries)
            
            if ( users.length ) {
                return res.status(200).json({
                    success:true,
                    users,
                })
            }
            return res.status(404).json({
                success:false,
                message: 'Error founding users'
            })
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: 'Error at getting the users'
            })
        }
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