import joi from "joi"

export const userSchema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().email().required().min(6),
    cpf: joi.string().required().min(11).max(11),
    password: joi.string().required().min(3)
});

