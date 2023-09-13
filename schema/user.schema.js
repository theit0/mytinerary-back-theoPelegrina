import Joi from "joi"

const email = Joi.string()
    .required()
    .email({
        minDomainSegments: 2
    })
    .messages({
        "any.required":"Email required"
    });
const password =  Joi.string()
    .required()
    .min(8)
    .max(35)
    .alphanum();

export const createUserSchema = Joi.object({
    email,
    password,
    name: Joi.string()
        .required()
        .min(2)
        .max(50)
        .alphanum(),
    image: Joi.string().required().uri()
})


export const userSignIn = Joi.object({
    email,
    password,
})

    