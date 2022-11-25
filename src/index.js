import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));