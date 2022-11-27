import { userCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { userSchema } from "../models/user.model.js";

export function userSchemaValidation(req, res, next) {
    const user = req.body;

    const { error } = userSchema.validate(user, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        res.status(400).send(errors)
    }

    res.locals.user = user;

    next();

}

export async function singInBodyValidation(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await userCollection.findOne({ email });
        if (!user) {
            console.log("email errado")
            return res.sendStatus(401);
        }
        const isPassword = bcrypt.compareSync(password, user.password);

        if (!isPassword) {
            console.log("senha errada")
            return res.sendStatus(401);
        }

        res.locals.user = user;
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

    next();
}