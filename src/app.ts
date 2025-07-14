import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", async (req: Request, res: Response) => {
  res.send("lol");
});

app.listen(3000, () => {
  console.log("server listening on http://localhost:3000");
});
