import express from 'express'
import authController from '../controllers/auth.controller.js'
import { accountExistSignUp } from '../middlewares/auth/accountExistSignUp.middleware.js';
import { accountHasBeenVerified } from '../middlewares/auth/accountHasBeenVerified.middleware.js';
import { accountExistSignIn } from '../middlewares/auth/accountExistSignIn.middleware.js';
import { passwordIsOk } from '../middlewares/auth/passwordIsOk.middleware.js';
import passport from '../middlewares/passport.js';
const {signup,signin,signout,token,googleSignIn} = authController;

const router = express.Router()

router.post('/signup'/* ,validator(validateSignup) */,accountExistSignUp,signup)
router.post('/signin'/* ,validator(validateSignup) */,accountExistSignIn, accountHasBeenVerified,passwordIsOk,signin)
router.post('/google',googleSignIn)
router.post('/signout',passport.authenticate('jwt',{session:false}),signout)
router.post('/token',passport.authenticate('jwt',{session:false}),token)


export default router