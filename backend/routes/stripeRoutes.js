import express from "express";
import { stripePayment } from "../controllers/stripe.controller.js";

const router = express.Router();

router.post("/payment", stripePayment);

export default router;

