import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'
import Jwt  from 'jsonwebtoken'
import {verify} from '../helpers/google_verify.js'

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

            const token = Jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    image: user.image
                },
                process.env.SECRET,
                {expiresIn:'10h'}
            )

            delete user.password;
            return res.status(200).json({
                success:true.valueOf,
                message:'User logged correctly',
                response: {
                    user,
                    token
                }
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error at user sign in'
            })
        }
    },
    
    googleSignIn: async(req,res,next)=>{
        const {token_id} = req.body
        try {
            //Verificar el token de google que viene desde el gront
            const {name,email,image} =  await verify(token_id)
            

            let user = await User.findOne({email})  //Puede ser user o null
            
            // Si el usuario no existe lo creo
            if(!user){
                const data = {
                    name, 
                    email,
                    image,
                    password: bcryptjs.hashSync(process.env.STANDARD_PASS, 10),
                    google:true,
                    verified_code:crypto.randomBytes(10).toString('hex')
                }

                user=await User.create(data)
            }
            // Si el usuario ya existe simplemente lo logueo
            user.online = true
            await user.save()
            
            const token = Jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    image: user.image
                },
                process.env.SECRET,
                {expiresIn:'10h'}
            )
            
            return res.status(200).json({
                success:true.valueOf,
                message:'User successfully logged in with google',
                response: {
                    user,
                    token
                }
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error at user sign in'
            })
        }
    },
    signout: async(req,res,next)=>{
        try {
            const user = await User.findOneAndUpdate(
                {email:req.user.email},
                {online:false},
                {new:true}
            )
            return res.status(200).json({
                success:true,
                message: 'User logged out'
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error at user sign in'
            })  
        }
    },
    token: async(req,res,next)=>{
        const {user} = req
        try {
            return res.status(200).json({
                user: {
                    name:user.name,
                    email:user.email,
                    image:user.image
                },

            })
        } catch (error) {
            next(error)
        }
    }
}

export default controller;