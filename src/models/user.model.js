import joi from "joi"

export const userSchema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().email().required().min(6),
    password: joi.string().required().min(3)
});

