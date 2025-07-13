import express from "express";
const app = express();
app.get("/", async (req, res) => {
    res.send("lol");
});
app.listen(3000, () => {
    console.log('server listening on http://localhost:3000');
});
