import express from "express";
import { placeOrder, getUserOrders } from "../controller/order.controller.js";

const router = express.Router();

router.post("/order", placeOrder);
router.get("/orders/:userId", getUserOrders);

export default router;