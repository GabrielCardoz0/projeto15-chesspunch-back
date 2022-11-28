import joi from "joi"

export const creditCardSchema = joi.object({
    method: joi.string().required(),
    numCreditCard: joi.number().required().min(14),
    securytCode: joi.number().required().min(3),
    validate: joi.string().required().min(7).max(7),
    adress: joi.string().required(),
    city: joi.string().required(),
    estado: joi.string().required().min(2).max(2),
    arrProducts: joi.array(),
    total:joi.number().required()
});


export const orderSchema = joi.object({
    method: joi.string().required(),
    num: joi.number().required(),
    adress: joi.string().required(),
    city: joi.string().required(),
    estado: joi.string().required().min(2).max(2),
    arrProducts: joi.array(),
    total:joi.number().required()
});