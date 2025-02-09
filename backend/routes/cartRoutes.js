import express from "express";
import {createCart, updateCart, deleteCart, getCart, getAllCarts} from "./../controllers/cart.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();
router
    .route('/')
    .get(verifyToken, getAllCarts)
    .post(verifyToken, createCart)

router
    .route('/id/:id')
    .patch(verifyToken, updateCart)
    .delete(verifyToken, deleteCart);

router
    .route('/find/:userId')
    .get(verifyToken, getCart);


export default router;