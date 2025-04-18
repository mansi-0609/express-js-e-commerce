import express from "express";
import { signInAction,signUpAction } from "../controller/user.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/sign-up", body("username", "username is required").notEmpty(),
body("username","only alphabates allowed ").isAlpha(),
body("email","not valid emailid").isEmail(),
body("email","email required").notEmpty(),
body("password","password is required").notEmpty(),
body("password","password invalid").isLength({min:5,max:10}),signUpAction);

router.post("/sign-in",signInAction);
export default router;
