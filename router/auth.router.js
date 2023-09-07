import express from 'express'
import authController from '../controllers/auth.controller.js'
import { accountExistSignUp } from '../middlewares/auth/accountExistSignUp.middleware.js';
import { accountHasBeenVerified } from '../middlewares/auth/accountHasBeenVerified.middleware.js';
import { accountExistSignIn } from '../middlewares/auth/accountExistSignIn.middleware.js';
import { passwordIsOk } from '../middlewares/auth/passwordIsOk.middleware.js';

const {signup,signin} = authController;

const router = express.Router()

router.post('/signup'/* ,validator(validateSignup) */,accountExistSignUp,signup)
router.post('/signin'/* ,validator(validateSignup) */,accountExistSignIn, accountHasBeenVerified,passwordIsOk,signin)

export default router