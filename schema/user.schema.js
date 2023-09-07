import Joi from "joi"
export const createUserSchema = Joi.object({
    email: Joi.string()
        .required()
        .email({
            minDomainSegments: 2
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(35)
        .alphanum(),
    name: Joi.string()
        .required()
        .min(2)
        .max(50)
        .alphanum(),
    image: Joi.string().required().uri()
})
