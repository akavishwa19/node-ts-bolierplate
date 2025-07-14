import express , { Request, Response } from "express";
import 'dotenv/config';
import {connectToDb} from "./Db/db.index.js";

const app = express();

app.get("/", async (req: Request, res: Response) => {
  res.send("lol");
});

const port:number=Number(process.env.APP_PORT) || 3001;

app.listen(port, async () => {
  await connectToDb();
  console.log("server listening on http://localhost:"+port);
});
