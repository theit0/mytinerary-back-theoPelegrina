export const accountHasBeenVerified = (req,res,next) => {
    if(req.user.verify){
        return next()
    }
    return res.status(400).json({
        success: false,
        message: 'User does not verify his account'
    })
}