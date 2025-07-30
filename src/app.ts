import express , { Request, Response } from "express";
import 'dotenv/config';
import {connectToDb} from "./Db/db.index.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.send("lol");
});

//routes
import userRoutes from './Routes/user.route.js';
app.use("/api/v1/user",userRoutes);

const port:number=Number(process.env.APP_PORT) || 3001;

app.listen(port, async () => {
  // await connectToDb();
  // console.log("server listening on http://localhost:"+port);
});

