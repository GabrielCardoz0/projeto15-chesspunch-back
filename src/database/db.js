import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MOGO_URI);

try {
    await mongoClient.connect();
    console.log("MongoDB Connected!");
} catch (error) {
    console.log(error);
}

export const db = mongoClient.db("ChessPush");
export const userCollection = db.collection("users");
export const sessionsCollections = db.collection("sessions");
export const productsCollections = db.collection("products");
export const orderedsCollections = db.collection("ordereds");
