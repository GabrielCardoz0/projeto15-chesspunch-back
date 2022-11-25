import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./database/db.js";
import router from "./routes/router.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

db;

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));