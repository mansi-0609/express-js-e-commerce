import express from "express";
import { addToCart , removeToCart,fetchdata } from "../controller/cart.controller.js";

const router = express.Router();
router.get("/:id",fetchdata);
router.post("/add-to-cart",addToCart);
router.delete("/delete-item",removeToCart);
export default router;

