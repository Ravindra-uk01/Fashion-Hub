import { validType } from "../config/functions.js";
import Product from "../models/product_schema.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";


export const createProduct = catchAsync(async (req, res, next) => {
  const allData = req.body;
  const newProduct = await Product.create(allData);

  return res.status(201).json({
    status: "success",
    message: "Product created successfully",
    newProduct
  });
});

export const getAllProducts = catchAsync(async (req, res, next) => {

  const qnew = req.query.new;
  const qcategory = req.query.category;

  let products;
  if(qnew){
    products = await Product.find().sort({createdAt: -1}).limit(1);
  }
  else if (qcategory){
    products = await Product.find({
      categories: { $in : [qcategory]}
    })
  }else{
    products = await Product.find();
  }

  return res.status(200).json({
    status: "success",
    message: "Products fetched successfully",
    products,
  });
});

export const getProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  return res.status(200).json({
    status: "success",
    message: "Product fetched successfully",
    product,
  });
});

export const updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { _id, role } = req.user;

  if (!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }

  const updatedProduct = await Product.findByIdAndUpdate(id,
    {
      $set: req.body,
    },
    {
      new:true,
      runValidators: true
    }
  )

  return res.status(200).json({
    status: "success",
    message: "Product has been updated successfully",
    updatedProduct
  })
});

export const deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { _id, role } = req.user;

  if (!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return next(new AppError(400, "No Product found with this Id."));
  }

  return res.status(200).json({
    status: "success",
    message: "Product has been deleted successfully",
    product,
  });
});
