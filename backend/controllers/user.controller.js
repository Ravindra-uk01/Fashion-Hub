import { validType } from "../config/functions.js";
import User from "../models/user_schema.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

export const createUser = catchAsync(async (req, res, next) => {
  const allData = req.body;
  const newUser = await User.create(allData);

  return res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: {
      user: newUser,
    },
  });
});

export const getAllUsers = catchAsync(async (req, res, next) => {
  const { _id, role } = req.user;
  const query = req.query.new;

  if (!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }
  // const users = await User.find({});
  const users = query
  ? await User.find().sort({ _id: -1 }).limit(5)
  : await User.find();

  return res.status(200).json({
    status: "success",
    message: "Users fetched successfully",
    data: {
      users,
    },
  });
});

export const getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);

  return res.status(200).json({
    status: "success",
    message: "User fetched successfully",
    data: {
      user,
    },
  });
});

export const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { _id, role } = req.user;

  if (!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return next(new AppError(400, "No User found with this Id."));
  }

  return res.status(200).json({
    status: "success",
    message: "User has been deleted successfully",
    user,
  });
});

export const updateProfile = catchAsync(async (req, res, next) => {
  // get the current user and ensure it does not change password from here
  const { _id } = req.user;

  if (req.body.password || req.body.confirm_password) {
    return next(
      new AppError(
        400,
        "Please use forget password link to change the password. "
      )
    );
  }

  // filtering out the things which we donot want to update
  const filterBody = filterObj(
    req.body,
    "first_name",
    "last_name",
    "phone",
    "photo"
  );

  // updation // we can use findByIdAndUpdate but it will not trigger the pre-save hook
  // const updatedUser = await User.findByIdAndUpdate(_id,
  //   {
  //     ...filterBody
  //   },
  //   {
  //     new: true,
  //     runValidators: true
  //   })

  const updatedUser = await User.findById(_id);

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  // Update fields
  Object.assign(updatedUser, filterBody);

  // Save the user (triggers pre-save hook)
  await updatedUser.save({validateBeforeSave: false});

  return res.status(200).json({
    message: "Profile is updated successfully.",
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

export const getUserStats = catchAsync(async(req, res, next) => {

  const { _id, role } = req.user;

  if (!validType(role, ["admin"])) {
    return next(new AppError(401, "Unauthorized User"));
  }

  const currentDate = new Date();
  const lastYear = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));

  const userStats = await User.aggregate([
    {
      $match: {
        createdAt : {$gte: lastYear},
      },
    },
    {
      $project: {
        month: { $month : "$createdAt"}
      }
    },
    {
      $group: {
        _id : "$month",
        total : {$sum : 1}
      }
    },
    {
      $sort: { _id: 1 }, 
    }
  ])

  return res.status(200).json({
    status : "success",
    message : "User stats fetched successfully",
    userStats
  })

})
