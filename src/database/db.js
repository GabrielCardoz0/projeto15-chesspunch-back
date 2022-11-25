import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
 
const mongoclient = new MongoClient(process.env.MONGO_URI);

try{
    await mongoclient.connect();
    console.log("Mongodb Connected!");
} catch(err){
    console.log(err);
}

export const db = mongoclient.db("ChessPush");
export const userCollection = db.collection("users");
export const sessionsCollections = db.collection("sessions");
export const productsCollections = db.collection("products");
export const orderedsCollections = db.collection("ordereds");
