import express from "express";
// import {createUser, getAllUsers, getUser, deleteUser, updateProfile} from "./../controllers/user.controller.js";
import {createOrder, updateOrder,deleteOrder,  getUserOrders, getAllOrders, getMonthlyIncome} from "./../controllers/order.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router
    .route('/')
    .get(verifyToken, getAllOrders)
    .post(createOrder)

router
    .route('/id/:id')
    .patch(verifyToken, updateOrder)
    .delete(verifyToken, deleteOrder);

router
    .route('/find/:userId')
    .get(verifyToken, getUserOrders);

router.get('/income',verifyToken , getMonthlyIncome);

export default router;