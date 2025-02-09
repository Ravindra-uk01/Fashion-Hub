import mongoose from 'mongoose';

const {Schema, Types, model} = mongoose;

const cart_schema = new Schema({
    user_id:{
        type: Types.ObjectId,
        ref: 'User',
        required: [true, "User is required"]
    },
    products: [
        {
            product_id:{
                type: Types.ObjectId,
                ref: 'Product',
                // required: [true, "Product is required"]
            },
            quantity:{
                type: Number,
                default: 1,
                // required: [true, "Quantity is required"]
            }
        }
    ],
    total_price:{
        type: Number,
        // required: [true, "Total Price is required"]
    },
    total_quantity:{
        type: Number,
        // required: [true, "Total Quantity is required"]
    },
    is_checked_out:{
        type: Boolean,
        default: false
    },
    is_deleted:{
        type: Boolean,
        default: false
    },
}, {
    timestamps: true

});

const Cart = model('Cart', cart_schema);
export default Cart;