import { sessionsCollections } from "../database/db.js";

export default async function productsfindControllers(req,res) {

    try{
        const {id} = req.params;

        const itemFind = await sessionsCollections.findOne({_id:id});

        if(!itemFind) return res.send(404);

        res.send(itemFind);

    }catch(err){
        console.log(err);
        res.sendstatus(500);
    };
};
