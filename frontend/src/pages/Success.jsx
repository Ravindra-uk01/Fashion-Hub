import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import newRequest from "../utils/newRequest";

const Success = () => {
  const [orderId, setOrderId] = useState(null);
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
//   const { cart, stripeData } = location.state|| {};
  const [stripeData, setStripeData] = useState(location.state?.stripeData || null);
  const [cart, setCart] = useState(location.state?.cart || null);


  useEffect(() => {
    const createOrder = async () => {
      if (!stripeData) return; 
      try {
        const response = await newRequest.post("/orders", {
          userId: user._id,
          products: cart.products.map((product) => ({
            productId: product._id,
            quantity: product.quantity,
          })),
          totalAmount: cart.total,
          address: stripeData.billing_details.address,
          paymentStatus: "paid",
        });

        const {newOrder} = response.data;
        console.log("response of order is ", response.data);
        setOrderId(newOrder._id);
        setStripeData(null);
        setCart(null);
      } catch (error) {
        console.log("error ", error);
      }
    };
     stripeData && createOrder();
  }, [user, stripeData, cart]);

  console.log("cart is ", cart);
  console.log("stripeData state is ", stripeData);
  console.log("user is ", user);
  console.log("orderId is ", orderId);
  console.log('locaation state is ', location.state)

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
       <Link to={"/"} ><button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button></Link>
    </div>
  );
};

export default Success;
