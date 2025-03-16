import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import newRequest from "../utils/newRequest";
import { emptyCart } from "../reducers/cartReducer";

const Success = () => {
  const [orderId, setOrderId] = useState(null);
  const { user } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const location = useLocation();
  const [stripeData, setStripeData] = useState(location.state?.stripeData || null);
  const dispatch = useDispatch();

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
        dispatch(emptyCart());
      } catch (error) {
        console.log("error ", error);
      }
    };
     stripeData && cart.total && createOrder();
  }, [user, stripeData, cart]);


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
