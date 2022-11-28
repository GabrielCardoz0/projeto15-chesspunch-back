import { orderedsCollections, sessionsCollections } from "../database/db.js";
import { creditCardSchema, orderSchema } from "../models/order.model.js";

export async function orderSchemaValidation(req, res, next) {
    const order = req.body;
    const { authorization } = req.headers;

    if (req.body.method === "creditCard") {
        const { error } = creditCardSchema.validate(order, { abortEarly: false });
        if (error) {
            const errors = error.details.map((detail) => detail.message);
            res.status(400).send(errors);
        }
    }

    if (req.body.method === "pix" || req.body.method === "boleto") {
        const { error } = orderSchema.validate(order, { abortEarly: false });
        if (error) {
            const errors = error.details.map((detail) => detail.message);
            res.status(400).send(errors);
        }
    }

    const token = authorization?.replace("Bearer ", "");
    try {
        const session = await sessionsCollections.findOne({ token });
        if (!session) {
            return res.sendStatus(401);
        }
        res.locals.userId = session.userId;
        res.locals.order = order;

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

    next();
}