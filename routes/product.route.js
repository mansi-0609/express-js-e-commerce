import express from "express";
import {saveInBulkAction , fetchProducts, fetchProduct,deleteProduct, updateProduct} from "../controller/product.controller.js";

const router =express.Router();
router.post("/save-in-bulk",saveInBulkAction);
router.post("/fetch-products",fetchProducts);
router.post("/fetch-product/:id",fetchProduct);
router.delete("/delete-product/:id",deleteProduct);
router.put("/update-product/:id",updateProduct);
export default router;