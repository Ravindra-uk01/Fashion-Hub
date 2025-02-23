import mongoose from 'mongoose';
const {Schema, Types, model} = mongoose;

const order_schema = new Schema({
    userId: { type: Types.ObjectId, ref: "User", required: true },
    products: [
      {
        productId: { type: Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    orderStatus: {
      type: String,
      enum: ["processing", "shipped", "delivered", "cancelled"],
      default: "processing",
    },
    // shippingAddress: {
    //   street: String,
    //   city: String,
    //   state: String,
    //   zip: String,
    //   country: String,
    // },
    address: {
     type: Object,
     required: true
    },
    
}, {
    timestamps: true

});

const Order = model('Order', order_schema);
export default Order;