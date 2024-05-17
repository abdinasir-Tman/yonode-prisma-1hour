import express from "express";
import {
  deleteWorld,
  readWorld,
  registerWorld,
  updateWorld,
} from "../controllers/helloWorld.js";

const helloWorld = express.Router();

helloWorld.post("/register", registerWorld);
helloWorld.get("/read", readWorld);
helloWorld.put("/update/:id", updateWorld);
helloWorld.delete("/delete/:id", deleteWorld);

export default helloWorld;
