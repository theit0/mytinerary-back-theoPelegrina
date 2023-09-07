import User from "../../models/user.model.js"

export const accountExistSignUp = async (req,res,next) =>{
    const user = await User.findOne({email:req.body.email});
    if(user) {
        return res.status(400).json({
            success:false,
            message: 'User is already signed up'
        })
    }
    return next()
}