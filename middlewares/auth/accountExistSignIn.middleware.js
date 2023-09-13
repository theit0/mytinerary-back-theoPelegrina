import User from "../../models/user.model.js";

export const accountExistSignIn =async (req,res,next) => {
    const user = await User.findOne({email:req.body.email});
    if(user) {
        req.user = {
            id: user._id,
            email: user.email, 
            image: user.image, 
            password: user.password, 
            online: user.online, 
            verify : user.verify
        }
        return next()
    }
    return res.status(400).json({
        success : false,
        message : 'User does not exist'
    })
 
}