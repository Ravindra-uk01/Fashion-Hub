import express from "express";
import {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct,} from "./../controllers/product.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router
    .route('/')
    .get( getAllProducts)
    .post(createProduct)

router
    .route('/id/:id')
    .get(getProduct)
    .patch(verifyToken, updateProduct)
    .delete(verifyToken, deleteProduct);

export default router;