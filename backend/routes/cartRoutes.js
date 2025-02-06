import express from "express";
// import {createUser, getAllUsers, getUser, deleteUser, updateProfile} from "./../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// router
//     .route('/')
//     .get(verifyToken, getAllUsers)
//     .post(createUser)

// router
//     .route('/id/:id')
//     .get(getUser)
//     .delete(verifyToken, deleteUser);


export default router;