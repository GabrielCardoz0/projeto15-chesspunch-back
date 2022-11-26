import { ObjectId } from "mongodb";
import { productsCollections } from "../database/db.js";

export default async function productsfindControllers(req, res) {
    try {
        const { id } = req.params;
        const itemFind = await productsCollections.findOne(ObjectId(id))

        if (!itemFind) {
            return res.sendStatus(404);
        }

        res.send(itemFind);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    };
};
