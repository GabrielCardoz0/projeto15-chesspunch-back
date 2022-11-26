import { productsCollections } from "../database/db.js";

export default async function productsfindControllers(req,res) {
    try{
        const {id} = req.params;

        const listaProducts = await productsCollections.find().toArray();
        const itemFind = listaProducts.filter(obj => obj._id == id);

        if(!itemFind[0]) return res.sendStatus(404);

        res.send(itemFind[0]);

    }catch(err){
        console.log(err);
        res.sendStatus(500);
    };
};
