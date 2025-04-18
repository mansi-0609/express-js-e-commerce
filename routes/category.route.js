import express from "express";
import {saveInBulkAction,fetchCategory} from "../controller/catagory.controller.js";

const router= express.Router();
router.post("/save-bulk-in-action",saveInBulkAction);
router.get("/fetch-category",fetchCategory);

export default router;