import express from "express";
import { getAll, get, post, put, remove, } from "../Controllers/user.controller.js";
const router = express.Router();
router.get("/all", getAll);
router.get("/", get);
router.post("/", post);
router.put("/", put);
router.delete("/", remove);
export default router;
