import express from "express";
import {createProduct, getAllProducts, getProduct, deleteProduct,} from "./../controllers/product.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router
    .route('/')
    .get(verifyToken, getAllProducts)
    .post(createProduct)

router
    .route('/id/:id')
    .get(getProduct)
    .delete(verifyToken, deleteProduct);

export default router;