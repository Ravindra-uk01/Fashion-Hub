import { validType } from "../config/functions.js";
import Cart from "../models/cart_schema.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

export const createCart = catchAsync(async (req, res, next) => {
  const allData = req.body;
  const newCart = await Cart.create(allData);

  return res.status(201).json({
    status: "success",
    message: "Cart created successfully",
    newCart,
  });
});

export const getAllCarts = catchAsync(async (req, res, next) => {

  if(!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }
  const allCarts = await Cart.find();

  return res.status(200).json({
    status: "success",
    message: "all Carts fetched successfully",
    allCarts,
  });
});

export const getCart = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const cart = await Cart.findOne({ user_id: userId });

  return res.status(200).json({
    status: "success",
    message: "cart fetched successfully",
    cart,
  });
});

export const updateCart = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const updatedCart = await Cart.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json({
    status: "success",
    message: "Cart has been updated successfully",
    updatedCart,
  });
});

export const deleteCart = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const deletedCart = await Cart.findByIdAndDelete(id);

  if (!deletedCart) {
    return next(new AppError(400, "No Cart found with this Id."));
  }

  return res.status(200).json({
    status: "success",
    message: "Cart has been deleted successfully",
    deletedCart,
  });
});
