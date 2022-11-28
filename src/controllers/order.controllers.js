import { orderedsCollections } from "../database/db.js";

export async function creditCardOrder(req, res){
    const userId = res.locals.userId;
    const order = res.locals.order

    order.userId = userId

    try{
        await orderedsCollections.insertOne(order);
        res.sendStatus(201);
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}