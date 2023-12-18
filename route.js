import express from "express";
import { addUsers, getUsers } from "./controllers/userController.js";

const router = express.Router();

router.route("/addusers").post(addUsers);

router.route("/users").get(getUsers);

export default router;
