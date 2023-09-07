import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'
const controller = {
    signup: async (req,res,next) => {
        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex')
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
            
            const user = await User.create(req.body)
            
            return res.status(201).json({
                success: true,
                message: 'User signed up'
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error at user sign up'
            })
        }
    },
    signin: async (req,res,next) => {
        try {
            let user = await User.findOneAndUpdate(
                {email : req.user.email},
                {online:true},
                {new:true}
            )
            delete user.password;
            return res.status(200).json({
                success:true.valueOf,
                message:'User logged correctly',
                response: {
                    user,
                    /* token */
                }
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error at user sign in'
            })
        }
    }
}

export default controller;