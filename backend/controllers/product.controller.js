import Product from "../models/product_schema.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

const filterObj = (obj, ...allowedFields) =>{
    const newObj = {};
    Object.keys(obj).forEach((el)=>{
      if(allowedFields.includes(el))
        newObj[el] = obj[el];
    })

    return newObj;
}

export const createProduct = catchAsync(async (req, res, next) => {

  const allData = req.body;
  const newProduct = await Product.create(allData);

  return res.status(201).json({
    status: "success",
    message: "Product created successfully",
    data: {
      Product: newProduct,
    },
  });
});

export const getAllProducts = catchAsync(async (req, res, next) => {

  const {_id, role} = req.user;

  if (!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }
  const Products = await Product.find({});

  return res.status(200).json({
    status: "success",
    message: "Products fetched successfully",
    data: {
      Products,
    },
  });
});

export const getProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const Product = await Product.findById(id);

  return res.status(200).json({
    status: "success",
    message: "Product fetched successfully",
    data: {
      Product,
    },
  });
});

export const deleteProduct = catchAsync(async (req, res, next)=>{
    const {id} = req.params;
    const {_id, role} = req.user;

    if (!validType(role, ["admin"])) {
      return next(new AppError(401, "Unauthorized User"));
    }

    const Product = await Product.findByIdAndDelete(id);

    if(!Product) {
      return next(new AppError(400, "No Product found with this Id."));
    }

    return res.status(200).json({
      status: "success",
      message: "Product has been deleted successfully",
      Product
    })

})

