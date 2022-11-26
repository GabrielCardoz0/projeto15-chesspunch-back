import { productsCollections } from "../database/db.js";

export default async function productsControllers(req,res) {
try{
    const array = await productsCollections.find().toArray();
    res.send(array)
}catch(err){
    console.log(err);
    res.sendStatus(500);
}
};
