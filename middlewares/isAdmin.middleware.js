import User from "../models/user.model.js"
export const isAdmin = async (req,res,next) => {
    const user = await User.findById(req.query.userId)
    try {
        if(user.role === 'admin'){
            return next()
        }
        return res.status(401).json({
            success: false,
            message: 'You are not authenticated for deleting cities'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error isAdmin middleware'
        })
    }
    
}