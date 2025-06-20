
import express from 'express'
import { getUser,createUser } from "../controller/user.controller.js";

const router=express.Router();

router.get("/",getUser);
router.post("/",createUser);

export {router as userRoutes}