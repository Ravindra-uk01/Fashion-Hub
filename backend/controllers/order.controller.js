import { validType } from "../config/functions.js";
import Order from "../models/order_schema.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

export const createOrder = catchAsync(async (req, res, next) => {
  const allData = req.body;
  const newOrder = await Order.create(allData);

  return res.status(201).json({
    status: "success",
    message: "Order created successfully",
    newOrder,
  });
});

export const getAllOrders = catchAsync(async (req, res, next) => {
  if (!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }
  const allOrders = await Order.find();

  return res.status(200).json({
    status: "success",
    message: "all Orders fetched successfully",
    allOrders,
  });
});

export const getUserOrders = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const userOrders = await Order.find({ userId: userId });

  return res.status(200).json({
    status: "success",
    message: "user orders fetched successfully",
    userOrders,
  });
});

export const updateOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { _id, role } = req.user;

  if (!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }

  const updatedOrder = await Order.findByIdAndUpdate(
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
    message: "Order has been updated successfully",
    updatedOrder,
  });
});

export const deleteOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { _id, role } = req.user;

  if (!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }

  const deletedOrder = await Order.findByIdAndDelete(id);

  if (!deletedOrder) {
    return next(new AppError(400, "No Order found with this Id."));
  }

  return res.status(200).json({
    status: "success",
    message: "Order has been deleted successfully",
    deletedOrder,
  });
});

export const getMonthlyIncome = catchAsync(async (req, res, next) => {
  const { _id, role } = req.user;

  if (!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }

  const currentDate = new Date();
  const lastMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
  const previousMonth = new Date(currentDate.setMonth(lastMonth.getMonth() - 1));

  const income = await Order.aggregate([
    {
        $match: {
            createdAt: {$gte : previousMonth},
        }  
    },
    {
        $project: {
            month : {$month : "$createdAt"},
            sales : "$totalAmount"
        }
    },
    {
        $group: {
            _id: "$month",
            total: {$sum : "$sales"}
        }
    }
  ]);

    return res.status(200).json({
        status: "success",
        message: "monthly income calculated ",
        income
    })

});
