import mongoose from 'mongoose';

const {Schema, Types, model} = mongoose;

const product_schema = new Schema({
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    description:{
        type: String,
        required: [true, "Description is required"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"]
    },
    discountPrice: {
        type: Number,
        default: 0, // Optional field for discounted price
    },
    image:{
        type: String,
        required: [true, "Image is required"]
    },
    is_deleted:{
        type: Boolean,
        default: false
    },
    categories: {
        type: Array,
    },
    size: {
        type: Array,
    },
    color: {
        type: Array,
    },
    brand: {
        type: String,
      },
    stock:{
        type: Number,
        required: [true, "Stock is required"],
        min: 0,
        default: 0
    },
    inStock: {
        type: Boolean,
        default: true
    },
    rating:{
        type: Number,
        default: 0
    },
    numReviews:{
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
      },
    status: {
        type: String,
        enum: ["active", "inactive", "archived"],
        default: "active",
      },
}, {
    timestamps: true

});

const Product = model('Product', product_schema);
export default Product;