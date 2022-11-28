import { v4 as uuidV4 } from "uuid"
import { sessionsCollections, userCollection } from "../database/db.js";
import bcrypt from "bcrypt"


export async function singUp(req, res) {
    const user = res.locals.user;
    console.log(user)
    const passwordHash = bcrypt.hashSync(user.password, 10)

    try {
        await userCollection.insertOne({ ...user, password: passwordHash })
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}


export async function singIn(req, res) {
    const user = res.locals.user;
    const token = uuidV4();
    
    try {
        await sessionsCollections.insertOne({ token, userId: user._id });
        res.send({token:token , name: user.name})
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}